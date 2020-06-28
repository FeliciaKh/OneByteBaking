import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardTitle, IonCardHeader } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Browse.css';
// import {Recipe} from './Recipe'
import recipeData from './data'


const Browse: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Browse</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Browse</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <IonCardHeader>
            <img src='https://www.recipetineats.com/wp-content/uploads/2016/08/Brownies_0.jpg' />
            <IonCardTitle>Brownies</IonCardTitle> 
          </IonCardHeader>
        </IonCard>
        <ExploreContainer name="Browser page"> 
        </ExploreContainer>
      </IonContent>
    </IonPage>
  );
};

export default Browse;
