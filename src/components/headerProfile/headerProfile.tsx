import React, {FC, useCallback} from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './headerProfile.styles';
import {getSource} from '~assets';

interface HeaderProfileInterface {
  avatarSummoner: string;
  summerTier: string;
  summonerName: string;
  summonerRank: string;
  summonerLevel: number;
}

export const HeaderProfile: React.FC<HeaderProfileInterface> = props => {
  const {
    avatarSummoner,
    summerTier,
    summonerName,
    summonerRank,
    summonerLevel,
  } = props;

  const returnRank = useCallback(() => {
    if (summerTier === 'Diamond' || 'DIAMOND' || 'diamond') {
      return getSource('ICONS_DIAMOND');
    } else if (summerTier === 'Bronze') {
      return getSource('ICONS_RIOT');
    }
  }, [summerTier]);

  return (
    <View style={styles.container}>
      <View style={styles.containerLeft}>
        <View style={styles.coverAvatar}>
          <Image
            style={styles.avatarSummoner}
            source={{
              uri: `https://ddragon.leagueoflegends.com/cdn/13.19.1/img/profileicon/${avatarSummoner}.png`,
            }}
          />
        </View>
        <View style={styles.containerName}>
          <Text style={styles.summonerName}>{summonerName}</Text>
          <Text style={styles.summonerLevel}>
            Level: {summonerLevel}, {summonerRank}
          </Text>
        </View>
      </View>
      <TouchableOpacity>
        <Image source={getSource('ICONS_SEARCH')} style={styles.iconsSearch} />
      </TouchableOpacity>
      <Image source={returnRank()} style={styles.iconDiamond} />
    </View>
  );
};
