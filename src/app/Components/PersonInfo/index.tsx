
import { Card, CardImg, CardBody, Table } from 'reactstrap';

import { PersonProps } from '../../interface';
import './index.scss'

const PersonInfoComponent: React.FC<PersonProps> = ({ person }) => {
  return (
    <div className="container mt-5 text-center">
      <Card>
        <CardImg className='align-self-center' width="20%" src="https://photos.angel.co/startups/i/4391719-3aabd788fcee2529fdd4548c7a646fcd-medium_jpg.jpg?buster=1500445714" alt="eyewa" />
        <CardBody>
        <Table borderless>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{person.name}</td>
          </tr>
          <tr>
            <td>Height</td>
            <td>{person.height}</td>
          </tr>
          <tr>
            <td>Hair Color</td>
            <td>{person.hair_color}</td>
          </tr>
          <tr>
            <td>Skin Color</td>
            <td>{person.skin_color}</td>
          </tr>
          <tr>
            <td>Eye Color</td>
            <td>{person.eye_color}</td>
          </tr>
          <tr>
            <td>Birth Year</td>
            <td>{person.birth_year}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>{person.gender}</td>
          </tr>
        </tbody>
      </Table>
        </CardBody>
      </Card>
    </div>
  )
};

export default PersonInfoComponent;
