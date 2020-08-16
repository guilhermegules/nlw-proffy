import React, { FC, useState } from 'react';
import { View, Text, Image, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';
import styles from './styles';
import { TeacherItemProps, Teacher } from '../../interfaces/teacher.interface';
import api from '../../services/api';

const TeacherItem: FC<TeacherItemProps> = ({ teacher, favorited }) => {
  const [isFavorited, setIsFavorited] = useState(favorited);

  const handleLinkWhatsapp = () => {
    api.post('connections', {
      userId: teacher.id,
    });

    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`);
  };

  const handleToggleFavorited = async () => {
    const favorites = await AsyncStorage.getItem('favorites');

    let favoritesList: any[] = [];

    favorites ? (favoritesList = JSON.parse(favorites)) : (favoritesList = []);

    if (isFavorited) {
      const favoriteIndex = favoritesList.findIndex((teacherItem: Teacher) => teacherItem.id === teacher.id);

      favoritesList.splice(favoriteIndex, 1);

      setIsFavorited(false);
    } else {
      favoritesList.push(teacher);

      setIsFavorited(true);
    }

    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesList));
  };

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image style={styles.avatar} source={{ uri: teacher.avatar }} />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>{teacher.name}</Text>
          <Text style={styles.subject}>{teacher.subject}</Text>
        </View>
      </View>
      <Text style={styles.bio}>{teacher.bio}</Text>
      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/Hora {'   '}
          <Text style={styles.priceValue}>R$ {teacher.cost}</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton
            onPress={handleToggleFavorited}
            style={[styles.favoriteButton, isFavorited ? styles.favorited : {}]}
          >
            {isFavorited ? <Image source={unfavoriteIcon} /> : <Image source={heartOutlineIcon} />}
          </RectButton>

          <RectButton onPress={handleLinkWhatsapp} style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};

export default TeacherItem;
