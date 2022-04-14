import AsyncSelect from 'react-select/async'
import axios from 'axios';
import {first as _first} from 'lodash'

import { SEARCH_API } from "../../constants";
import { PersonState } from '../../interface';
import { useState } from 'react';
import PersonInfoComponent from '../PersonInfo';



const SearchComponent: React.FC = () => {
  const [people,setPeople] = useState<PersonState[]>()
  const [selectedPerson, setSelectedPerson] = useState<PersonState>()

  const loadOptions = async (inputValue: string) => {
    if (inputValue.length >= 2) {
      try {
        const { data } = await axios.get(`${SEARCH_API}${inputValue}`);
        setPeople(data.results)
        return data && data.results.map((result: PersonState) => {
          return {
            label: result.name,
            value: result.name
          }
        })
      } catch (error) {
        console.log(error);
      }
    }
    return []
  }

  const selectedData = (e: any) => {
    const person = people?.filter((person) => person.name === e.value);
    setSelectedPerson(_first(person));
  }

  return (
    <div className="container mt-5 text-center">
      <AsyncSelect
        loadOptions={loadOptions}
        onChange={selectedData}
        placeholder="Start typing for search..."
      />
      {selectedPerson && <PersonInfoComponent person={selectedPerson}/>}
    </div>
  )
};

export default SearchComponent;
