import React, {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import getEvolutions from '../../../../services/getEvolutions';
import {ContainerPokeball, PokeballImage} from '../PokeballLoading/styles';
import * as styles from './styles';
const Evolutions = ({comp, name, id}) => {
  const [evolution, setEvolution] = useState([]);

  let evo = evolution[0]?.family;
  let keys = Object.keys(evolution);

  useEffect(() => {
    getEvolutions(id, setEvolution);
  }, [id]);

  return (
    <View>
      {evo?.evolutionLine.length === 3 &&
      Object.keys(name).length === Object.keys(evo?.evolutionLine[0]).length &&
      evo.evolutionStage === 1 ? (
        <styles.ContainerEvolutions>
          <styles.ContainerEvolutionsDetails>
            <styles.ContainerTextEvolutions>
              <styles.FirstTextEV>{evo?.evolutionLine[0]}</styles.FirstTextEV>
            </styles.ContainerTextEvolutions>
            <styles.FirstImagePoke
              resizeMode={'contain'}
              source={{
                uri: `https://pokeres.bastionbot.org/images/pokemon/${id}.png`,
              }}
            />
          </styles.ContainerEvolutionsDetails>
          <styles.ContainerEvolutionsDetails>
            <styles.ContainerTextEvolutions>
              <styles.SecondTextEV>{evo?.evolutionLine[1]}</styles.SecondTextEV>
            </styles.ContainerTextEvolutions>
            <styles.SecondImagePoke
              resizeMode={'contain'}
              source={{
                uri: `https://pokeres.bastionbot.org/images/pokemon/${(id += 1)}.png`,
              }}
            />
          </styles.ContainerEvolutionsDetails>
          <styles.ContainerEvolutionsDetails>
            <styles.ContainerTextEvolutions>
              <styles.ThirdTextEV>{evo?.evolutionLine[2]}</styles.ThirdTextEV>
            </styles.ContainerTextEvolutions>
            <styles.ThirdImagePoke
              resizeMode={'contain'}
              source={{
                uri: `https://pokeres.bastionbot.org/images/pokemon/${(id += 1)}.png`,
              }}
            />
          </styles.ContainerEvolutionsDetails>
        </styles.ContainerEvolutions>
      ) : evo?.evolutionLine.length === 3 &&
        Object.keys(name).length ===
          Object.keys(evo?.evolutionLine[1]).length &&
        evo.evolutionStage === 2 ? (
        <styles.ContainerEvolutions>
          <styles.ContainerEvolutionsDetails>
            <styles.ContainerTextEvolutions>
              <styles.FirstTextEV>{evo?.evolutionLine[0]}</styles.FirstTextEV>
            </styles.ContainerTextEvolutions>
            <styles.FirstImagePoke
              resizeMode={'contain'}
              source={{
                uri: `https://pokeres.bastionbot.org/images/pokemon/${(id -= 1)}.png`,
              }}
            />
          </styles.ContainerEvolutionsDetails>
          <styles.ContainerEvolutionsDetails>
            <styles.ContainerTextEvolutions>
              <styles.SecondTextEV>{evo?.evolutionLine[1]}</styles.SecondTextEV>
            </styles.ContainerTextEvolutions>
            <styles.SecondImagePoke
              resizeMode={'contain'}
              source={{
                uri: `https://pokeres.bastionbot.org/images/pokemon/${(id += 1)}.png`,
              }}
            />
          </styles.ContainerEvolutionsDetails>
          <styles.ContainerEvolutionsDetails>
            <styles.ContainerTextEvolutions>
              <styles.ThirdTextEV>{evo?.evolutionLine[2]}</styles.ThirdTextEV>
            </styles.ContainerTextEvolutions>
            <styles.ThirdImagePoke
              resizeMode={'contain'}
              source={{
                uri: `https://pokeres.bastionbot.org/images/pokemon/${(id += 1)}.png`,
              }}
            />
          </styles.ContainerEvolutionsDetails>
        </styles.ContainerEvolutions>
      ) : evo?.evolutionLine.length == 3 &&
        Object.keys(name).length == Object.keys(evo?.evolutionLine[2]).length &&
        evo.evolutionStage === 3 ? (
        <styles.ContainerEvolutions>
          <styles.ContainerEvolutionsDetails>
            <styles.ContainerTextEvolutions>
              <styles.FirstTextEV>{evo?.evolutionLine[0]}</styles.FirstTextEV>
            </styles.ContainerTextEvolutions>
            <styles.FirstImagePoke
              resizeMode={'contain'}
              source={{
                uri: `https://pokeres.bastionbot.org/images/pokemon/${(id -= 2)}.png`,
              }}
            />
          </styles.ContainerEvolutionsDetails>
          <styles.ContainerEvolutionsDetails>
            <styles.ContainerTextEvolutions>
              <styles.SecondTextEV>{evo?.evolutionLine[1]}</styles.SecondTextEV>
            </styles.ContainerTextEvolutions>
            <styles.SecondImagePoke
              resizeMode={'contain'}
              source={{
                uri: `https://pokeres.bastionbot.org/images/pokemon/${(id += 1)}.png`,
              }}
            />
          </styles.ContainerEvolutionsDetails>
          <styles.ContainerEvolutionsDetails>
            <styles.ContainerTextEvolutions>
              <styles.ThirdTextEV>{evo?.evolutionLine[2]}</styles.ThirdTextEV>
            </styles.ContainerTextEvolutions>
            <styles.ThirdImagePoke
              resizeMode={'contain'}
              source={{
                uri: `https://pokeres.bastionbot.org/images/pokemon/${(id += 1)}.png`,
              }}
            />
          </styles.ContainerEvolutionsDetails>
        </styles.ContainerEvolutions>
      ) : evo?.evolutionLine.length == 2 ? (
        <styles.ContainerEvolutionsTwo>
          <styles.ContainerEvolutionsDetails>
            <styles.ContainerTextEvolutions>
              <styles.OtherFirstTextEV>
                {evo?.evolutionLine[0]}
              </styles.OtherFirstTextEV>
            </styles.ContainerTextEvolutions>
            <styles.OtherFirstImagePoke
              resizeMode={'contain'}
              source={{
                uri: `https://pokeres.bastionbot.org/images/pokemon/${(id -= 1)}.png`,
              }}
            />
          </styles.ContainerEvolutionsDetails>
          <styles.ContainerEvolutionsDetails>
            <styles.ContainerTextEvolutions>
              <styles.OtherSecondTextEV>
                {evo?.evolutionLine[1]}
              </styles.OtherSecondTextEV>
            </styles.ContainerTextEvolutions>
            <styles.OtherSecondImagePoke
              resizeMode={'contain'}
              source={{
                uri: `https://pokeres.bastionbot.org/images/pokemon/${(id += 1)}.png`,
              }}
            />
          </styles.ContainerEvolutionsDetails>
        </styles.ContainerEvolutionsTwo>
      ) : (
        <ContainerPokeball>
          <PokeballImage
            resizeMode={'contain'}
            source={require('../../../../image/pokeballgif.gif')}
          />
        </ContainerPokeball>
      )}
    </View>
  );
};

export default Evolutions;
