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

        <IonCard>
          <IonCardHeader>
            <img src='https://themodernproper.sfo2.cdn.digitaloceanspaces.com/posts/2018/_recipeSquare/easy-tiramisu-11.jpg?mtime=20181021075447&focal=none&tmtime=20200211015326' />
            <IonCardTitle>Tiramisu</IonCardTitle> 
          </IonCardHeader>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <img src= 'https://www.bigbearswife.com/wp-content/uploads/2017/01/Caramel-Banana-Pudding-Parfaits-7.jpg' />
            <IonCardTitle>Caramel Banana Pudding</IonCardTitle>
          </IonCardHeader>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <img src= 'https://www.biggerbolderbaking.com/wp-content/uploads/2015/04/BBB69-Churros-Chocolate-Thumbnail-v.1.jpg' />
            <IonCardTitle class='light'>Churros</IonCardTitle>
          </IonCardHeader>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <img src= 'https://www.restlesschipotle.com/wp-content/uploads/2015/06/deep-fried-oreos-feat.jpg' />
            <IonCardTitle>Deep Fried Oreos</IonCardTitle>
          </IonCardHeader>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <img src= 'https://cookiesandcups.com/wp-content/uploads/2017/10/bestsnickerdoodles-266x266.jpg' />
            <IonCardTitle class='light'>Snickerdoodle Cookies</IonCardTitle>
          </IonCardHeader>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <img src= 'https://cdn.shopify.com/s/files/1/0163/5948/9636/articles/unicorn-cake-nerdy-nummeis_1024x1024.jpg?v=1547142809' />
            <IonCardTitle>Unicorn Cake</IonCardTitle>
          </IonCardHeader>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <img src= 'https://www.homecookingadventure.com/images/recipes/Chocolate_Mirror_Cake_main.jpg' />
            <IonCardTitle class='light'>Chocolate Mirror Glaze Cake</IonCardTitle>
          </IonCardHeader>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <img src= 'https://images-gmi-pmc.edge-generalmills.com/b6a2a4e7-73f5-4aec-9bb6-f2b5054d65e6.jpg' />
            <IonCardTitle class='light'>Dutch Apple Pie</IonCardTitle>
          </IonCardHeader>
        </IonCard>
        
      </IonContent>
    </IonPage>
  );
};

export default Browse;
