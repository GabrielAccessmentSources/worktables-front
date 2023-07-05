export const GetCountriesQuery = `
  query { 
    boards { 
      id
      name
      items { 
        id
        name
      }
    } 
  }
`;


export const GetCountryDetailsQuery = `
  query($id: Int!) { 
    boards {
      id
      name
      items(ids: [$id]){
        id
        name,
        column_values {
            id,
            value,
            title,
            text,
        }
      }
    }
  }
`;