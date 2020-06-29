import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardTitle, IonCardHeader } from '@ionic/react';
// import ExploreContainer from '../components/ExploreContainer';
import './Browse.css';
// import {Recipe} from './Recipe'
// import recipeData from './data'


const Browse: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Browse all our recipes!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class='card-background-page'>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Browse</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonCard>
          <IonCardHeader>
            <img src='https://www.recipetineats.com/wp-content/uploads/2016/08/Brownies_0.jpg' />
            <IonCardTitle class= 'light'>Brownies</IonCardTitle> 
          </IonCardHeader>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <img src='https://www.chelseasmessyapron.com/wp-content/uploads/2019/02/Bakery-Style-Chocolate-Chip-Cookies-1.jpg' />
            <IonCardTitle>Chocolate Chip Cookies</IonCardTitle> 
          </IonCardHeader>
        </IonCard>
        
      </IonContent>
    </IonPage>
  );
};

export default Browse;
