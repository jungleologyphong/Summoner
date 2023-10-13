import React from 'react';
import {Image, ImageSourcePropType, Text, View} from 'react-native';
import {getSource} from '~assets';
import {styles} from './ItemChampionMastery.styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ChampionEntity from '~modules/champion/entity';

interface ItemChampionMasteryProps {
  imageChampion: ImageSourcePropType;
  championLevel: number;
  championId: string;
  indexItem: number;
  data: ChampionEntity[];
}

export const ItemChampionMastery: React.FC<
  ItemChampionMasteryProps
> = props => {
  const {imageChampion, indexItem, championLevel, championId, data} = props;

  const findChampionById = (data: ChampionEntity[], championId: string) => {
    const champion = data.find(champion => {
      if (champion.key === championId) {
        return champion;
      }
    });

    if (champion) {
      return champion;
    } else {
      return null;
    }
  };

  return (
    <View
      style={[
        styles.containerItemChampMastery,

        {marginLeft: indexItem !== 0 ? wp('2%') : 0},
      ]}>
      <Image style={styles.imageChamp} source={imageChampion} />
      <View style={styles.containerMastery}>
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.textNameChamp}>
            {findChampionById(data, championId.toString())?.name}
          </Text>
          <Text style={styles.textRole}>
            {findChampionById(data, championId.toString())?.tags[0]}
          </Text>
        </View>
        <Image
          style={styles.imageMastery}
          source={
            championLevel === 0
              ? getSource('ICONS_MASTERY_DEFAULT')
              : championLevel > 1 && championLevel < 3
              ? getSource('ICONS_MASTERY_4')
              : championLevel === 4
              ? getSource('ICONS_MASTERY_4')
              : championLevel === 5
              ? getSource('ICONS_MASTERY_5')
              : championLevel === 6
              ? getSource('ICONS_MASTERY_6')
              : getSource('ICONS_MASTERY_7')
          }
        />
      </View>
    </View>
  );
};
