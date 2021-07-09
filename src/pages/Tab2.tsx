import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput } from '@ionic/react';
import { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  const [saldo, setSaldo] = useState("")

  const handleSaldo = (value:string) => {
    setSaldo(value)
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 2 page">

            <IonTitle size="large">Valor</IonTitle>
            <IonInput value={saldo} placeholder="0.00" onIonChange={e => handleSaldo(e.detail.value!)}></IonInput>
        </ExploreContainer>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
