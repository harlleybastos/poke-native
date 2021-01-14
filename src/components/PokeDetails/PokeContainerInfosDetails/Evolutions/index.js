import React, {useEffect, useState} from 'react';
import {Dimensions, Text, View} from 'react-native';
import getEvolutions from '~/services/getEvolutions';
import * as PokeBallLoadingStyles from '~/components/PokeDetails/PokeContainerInfosDetails/PokeballLoading/styles';
import * as EvolutionStyles from './styles';
import {usePoke} from '~/context/PokeDate';

const Evolutions = ({name, id}) => {
  const {getPokemonByName} = usePoke();
  const [evolution, setEvolution] = useState([]);
  const [evolutionRefOne, setEvolutionRefOne] = useState([]);
  const [evolutionRefTwo, setEvolutionRefTwo] = useState([]);
  const [evolutionRefThree, setEvolutionRefThree] = useState([]);
  let evo = evolution[0]?.family;

  useEffect(() => {
    getEvolutions(id, setEvolution);
  }, [id]);

  useEffect(() => {
    async function getPokemon() {
      const respOne = await getPokemonByName(
        (evo?.evolutionLine[0]).toLowerCase(),
      );
      setEvolutionRefOne(respOne?.data?.id);
    }
    getPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [evo?.evolutionLine[0]]);

  useEffect(() => {
    async function getPokemon() {
      const respOne = await getPokemonByName(
        (evo?.evolutionLine[1]).toLowerCase(),
      );
      setEvolutionRefTwo(respOne?.data?.id);
    }
    getPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [evo?.evolutionLine[1]]);

  useEffect(() => {
    async function getPokemon() {
      const respOne = await getPokemonByName(
        (evo?.evolutionLine[2]).toLowerCase(),
      );
      setEvolutionRefThree(respOne?.data?.id);
    }
    getPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [evo?.evolutionLine[2]]);

  return (
    <EvolutionStyles.ContainerEvolutionsMain>
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
                uri: `https://pokeres.bastionbot.org/images/pokemon/${evolutionRefOne}.png`,
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
                uri: `https://pokeres.bastionbot.org/images/pokemon/${evolutionRefTwo}.png`,
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
                uri: `https://pokeres.bastionbot.org/images/pokemon/${evolutionRefThree}.png`,
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
                uri: `https://pokeres.bastionbot.org/images/pokemon/${evolutionRefOne}.png`,
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
                uri: `https://pokeres.bastionbot.org/images/pokemon/${evolutionRefTwo}.png`,
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
                uri: `https://pokeres.bastionbot.org/images/pokemon/${evolutionRefThree}.png`,
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
                uri: `https://pokeres.bastionbot.org/images/pokemon/${evolutionRefOne}.png`,
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
                uri: `https://pokeres.bastionbot.org/images/pokemon/${evolutionRefTwo}.png`,
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
                uri: `https://pokeres.bastionbot.org/images/pokemon/${evolutionRefThree}.png`,
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
                uri: `https://pokeres.bastionbot.org/images/pokemon/${evolutionRefOne}.png`,
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
                uri: `https://pokeres.bastionbot.org/images/pokemon/${evolutionRefTwo}.png`,
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
    </EvolutionStyles.ContainerEvolutionsMain>
  );
};

export default Evolutions;
