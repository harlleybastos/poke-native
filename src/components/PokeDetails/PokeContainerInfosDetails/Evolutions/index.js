import React, {useEffect, useState} from 'react';
import {Dimensions, View} from 'react-native';
import getEvolutions from '~/services/getEvolutions';
import * as PokeBallLoadingStyles from '~/components/PokeDetails/PokeContainerInfosDetails/PokeballLoading/styles';
import * as EvolutionStyles from './styles';

const width = Dimensions.get('screen').width;

const Evolutions = ({comp, name, id}) => {
  const [evolution, setEvolution] = useState([]);

  let evo = evolution[0]?.family;
  let keys = Object.keys(evolution);

  useEffect(() => {
    getEvolutions(id, setEvolution);
  }, [id]);

  return (
    <View style={{width: width}}>
      {evo?.evolutionLine.length === 3 &&
      Object.keys(name).length === Object.keys(evo?.evolutionLine[0]).length &&
      evo.evolutionStage === 1 ? (
        <EvolutionStyles.ContainerEvolutions>
          <EvolutionStyles.ContainerEvolutionsDetails>
            <EvolutionStyles.ContainerTextEvolutions>
              <EvolutionStyles.FirstTextEV>
                {evo?.evolutionLine[0]}
              </EvolutionStyles.FirstTextEV>
            </EvolutionStyles.ContainerTextEvolutions>
            <EvolutionStyles.FirstImagePoke
              resizeMode={'contain'}
              source={{
                uri: `https://pokeres.bastionbot.org/images/pokemon/${id}.png`,
              }}
            />
          </EvolutionStyles.ContainerEvolutionsDetails>
          <EvolutionStyles.ContainerEvolutionsDetails>
            <EvolutionStyles.ContainerTextEvolutions>
              <EvolutionStyles.SecondTextEV>
                {evo?.evolutionLine[1]}
              </EvolutionStyles.SecondTextEV>
            </EvolutionStyles.ContainerTextEvolutions>
            <EvolutionStyles.SecondImagePoke
              resizeMode={'contain'}
              source={{
                uri: `https://pokeres.bastionbot.org/images/pokemon/${(id += 1)}.png`,
              }}
            />
          </EvolutionStyles.ContainerEvolutionsDetails>
          <EvolutionStyles.ContainerEvolutionsDetails>
            <EvolutionStyles.ContainerTextEvolutions>
              <EvolutionStyles.ThirdTextEV>
                {evo?.evolutionLine[2]}
              </EvolutionStyles.ThirdTextEV>
            </EvolutionStyles.ContainerTextEvolutions>
            <EvolutionStyles.ThirdImagePoke
              resizeMode={'contain'}
              source={{
                uri: `https://pokeres.bastionbot.org/images/pokemon/${(id += 1)}.png`,
              }}
            />
          </EvolutionStyles.ContainerEvolutionsDetails>
        </EvolutionStyles.ContainerEvolutions>
      ) : evo?.evolutionLine.length === 3 &&
        Object.keys(name).length ===
          Object.keys(evo?.evolutionLine[1]).length &&
        evo.evolutionStage === 2 ? (
        <EvolutionStyles.ContainerEvolutions>
          <EvolutionStyles.ContainerEvolutionsDetails>
            <EvolutionStyles.ContainerTextEvolutions>
              <EvolutionStyles.FirstTextEV>
                {evo?.evolutionLine[0]}
              </EvolutionStyles.FirstTextEV>
            </EvolutionStyles.ContainerTextEvolutions>
            <EvolutionStyles.FirstImagePoke
              resizeMode={'contain'}
              source={{
                uri: `https://pokeres.bastionbot.org/images/pokemon/${(id -= 1)}.png`,
              }}
            />
          </EvolutionStyles.ContainerEvolutionsDetails>
          <EvolutionStyles.ContainerEvolutionsDetails>
            <EvolutionStyles.ContainerTextEvolutions>
              <EvolutionStyles.SecondTextEV>
                {evo?.evolutionLine[1]}
              </EvolutionStyles.SecondTextEV>
            </EvolutionStyles.ContainerTextEvolutions>
            <EvolutionStyles.SecondImagePoke
              resizeMode={'contain'}
              source={{
                uri: `https://pokeres.bastionbot.org/images/pokemon/${(id += 1)}.png`,
              }}
            />
          </EvolutionStyles.ContainerEvolutionsDetails>
          <EvolutionStyles.ContainerEvolutionsDetails>
            <EvolutionStyles.ContainerTextEvolutions>
              <EvolutionStyles.ThirdTextEV>
                {evo?.evolutionLine[2]}
              </EvolutionStyles.ThirdTextEV>
            </EvolutionStyles.ContainerTextEvolutions>
            <EvolutionStyles.ThirdImagePoke
              resizeMode={'contain'}
              source={{
                uri: `https://pokeres.bastionbot.org/images/pokemon/${(id += 1)}.png`,
              }}
            />
          </EvolutionStyles.ContainerEvolutionsDetails>
        </EvolutionStyles.ContainerEvolutions>
      ) : evo?.evolutionLine.length == 3 &&
        Object.keys(name).length == Object.keys(evo?.evolutionLine[2]).length &&
        evo.evolutionStage === 3 ? (
        <EvolutionStyles.ContainerEvolutions>
          <EvolutionStyles.ContainerEvolutionsDetails>
            <EvolutionStyles.ContainerTextEvolutions>
              <EvolutionStyles.FirstTextEV>
                {evo?.evolutionLine[0]}
              </EvolutionStyles.FirstTextEV>
            </EvolutionStyles.ContainerTextEvolutions>
            <EvolutionStyles.FirstImagePoke
              resizeMode={'contain'}
              source={{
                uri: `https://pokeres.bastionbot.org/images/pokemon/${(id -= 2)}.png`,
              }}
            />
          </EvolutionStyles.ContainerEvolutionsDetails>
          <EvolutionStyles.ContainerEvolutionsDetails>
            <EvolutionStyles.ContainerTextEvolutions>
              <EvolutionStyles.SecondTextEV>
                {evo?.evolutionLine[1]}
              </EvolutionStyles.SecondTextEV>
            </EvolutionStyles.ContainerTextEvolutions>
            <EvolutionStyles.SecondImagePoke
              resizeMode={'contain'}
              source={{
                uri: `https://pokeres.bastionbot.org/images/pokemon/${(id += 1)}.png`,
              }}
            />
          </EvolutionStyles.ContainerEvolutionsDetails>
          <EvolutionStyles.ContainerEvolutionsDetails>
            <EvolutionStyles.ContainerTextEvolutions>
              <EvolutionStyles.ThirdTextEV>
                {evo?.evolutionLine[2]}
              </EvolutionStyles.ThirdTextEV>
            </EvolutionStyles.ContainerTextEvolutions>
            <EvolutionStyles.ThirdImagePoke
              resizeMode={'contain'}
              source={{
                uri: `https://pokeres.bastionbot.org/images/pokemon/${(id += 1)}.png`,
              }}
            />
          </EvolutionStyles.ContainerEvolutionsDetails>
        </EvolutionStyles.ContainerEvolutions>
      ) : evo?.evolutionLine.length == 2 ? (
        <EvolutionStyles.ContainerEvolutionsTwo>
          <EvolutionStyles.ContainerEvolutionsDetails>
            <EvolutionStyles.ContainerTextEvolutions>
              <EvolutionStyles.OtherFirstTextEV>
                {evo?.evolutionLine[0]}
              </EvolutionStyles.OtherFirstTextEV>
            </EvolutionStyles.ContainerTextEvolutions>
            <EvolutionStyles.OtherFirstImagePoke
              resizeMode={'contain'}
              source={{
                uri: `https://pokeres.bastionbot.org/images/pokemon/${(id -= 1)}.png`,
              }}
            />
          </EvolutionStyles.ContainerEvolutionsDetails>
          <EvolutionStyles.ContainerEvolutionsDetails>
            <EvolutionStyles.ContainerTextEvolutions>
              <EvolutionStyles.OtherSecondTextEV>
                {evo?.evolutionLine[1]}
              </EvolutionStyles.OtherSecondTextEV>
            </EvolutionStyles.ContainerTextEvolutions>
            <EvolutionStyles.OtherSecondImagePoke
              resizeMode={'contain'}
              source={{
                uri: `https://pokeres.bastionbot.org/images/pokemon/${(id += 1)}.png`,
              }}
            />
          </EvolutionStyles.ContainerEvolutionsDetails>
        </EvolutionStyles.ContainerEvolutionsTwo>
      ) : (
        <PokeBallLoadingStyles.ContainerPokeball>
          <PokeBallLoadingStyles.PokeballImage
            resizeMode={'contain'}
            source={require('~/image/pokeballgif.gif')}
          />
        </PokeBallLoadingStyles.ContainerPokeball>
      )}
    </View>
  );
};

export default Evolutions;
