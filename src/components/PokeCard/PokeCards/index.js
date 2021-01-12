import React from 'react';
import * as PokeIMGStyles from '~/components/PokeImage/styles';
import * as PokeInfoAndCont from '~/components/PokeCard/styles.js';
import {colors} from './styles.js';
import {View} from 'react-native';
const PokeCards = ({pokeData}) => {
  const types = pokeData?.data?.types.map((item) => item.type.name);
  const main_types = Object.keys(colors);
  const typesColor = main_types.find((type) => types.indexOf(type) == 0);
  let colorCard = colors[typesColor];

  return (
    <PokeInfoAndCont.PokeContainer
      style={{
        backgroundColor: colorCard,
        shadowColor: '#000',
        shadowOpacity: 0.8,
        elevation: 5,
        shadowRadius: 2,
      }}>
      {pokeData?.data?.types?.length > 1 ? (
        <View>
          <PokeIMGStyles.PokeInfo>
            <PokeIMGStyles.PokeImageDiv>
              <PokeIMGStyles.PokeImage
                resizeMode={'contain'}
                source={{
                  uri: `https://pokeres.bastionbot.org/images/pokemon/${pokeData.data.id}.png`,
                }}
              />
            </PokeIMGStyles.PokeImageDiv>
          </PokeIMGStyles.PokeInfo>
          <PokeInfoAndCont.PokeName>
            {pokeData.data.name}
          </PokeInfoAndCont.PokeName>
          <PokeInfoAndCont.PokeNumber>
            #{pokeData.data.id}
          </PokeInfoAndCont.PokeNumber>
          <PokeInfoAndCont.PokeContainerTypeOne
            style={{backgroundColor: colorCard, elevation: 10}}>
            <PokeInfoAndCont.PokeTypeOne>
              {pokeData?.data?.types[0].type.name}
            </PokeInfoAndCont.PokeTypeOne>
          </PokeInfoAndCont.PokeContainerTypeOne>
          <PokeInfoAndCont.PokeContainerTypeTwo
            style={{backgroundColor: colorCard, elevation: 10}}>
            <PokeInfoAndCont.PokeTypeTwo>
              {pokeData?.data?.types[1].type.name}
            </PokeInfoAndCont.PokeTypeTwo>
          </PokeInfoAndCont.PokeContainerTypeTwo>
        </View>
      ) : pokeData?.data?.types?.length == 1 ? (
        <View>
          <PokeIMGStyles.PokeInfoSingle>
            <PokeIMGStyles.PokeImageDivSingle>
              <PokeIMGStyles.PokeImage
                resizeMode={'contain'}
                source={{
                  uri: `https://pokeres.bastionbot.org/images/pokemon/${pokeData.data.id}.png`,
                }}
              />
            </PokeIMGStyles.PokeImageDivSingle>
          </PokeIMGStyles.PokeInfoSingle>
          <PokeInfoAndCont.PokeNameSingle>
            {pokeData.data.name}
          </PokeInfoAndCont.PokeNameSingle>
          <PokeInfoAndCont.PokeNumberSingle>
            #{pokeData.data.id}
          </PokeInfoAndCont.PokeNumberSingle>
          <PokeInfoAndCont.PokeContainerTypeOneSingle
            style={{backgroundColor: colorCard, elevation: 10}}>
            <PokeInfoAndCont.PokeTypeOne>
              {pokeData?.data?.types[0].type.name}
            </PokeInfoAndCont.PokeTypeOne>
          </PokeInfoAndCont.PokeContainerTypeOneSingle>
        </View>
      ) : null}
    </PokeInfoAndCont.PokeContainer>
  );
};

export default PokeCards;
