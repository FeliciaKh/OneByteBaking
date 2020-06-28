import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Browse.css';
import {Recipe} from './Recipe'


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
        <ExploreContainer name="Browser page"> 
        Hello World!
          {/* <Recipe /> */}
        </ExploreContainer>
      </IonContent>
    </IonPage>
  );
};

export default Browse;
