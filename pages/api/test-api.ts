// APIで遊ぶ
import { firebase } from '../../src/firebase';

export default async (req, res) => {
  const text = await firebase.firestore().collection('test_db').doc('testes').get().then(doc => doc.data());
  // const snapshotText = await firebase.firestore().collection('test_db').doc('testes').onSnapshot(snapshot => snapshot.data())
  if (req.method === 'POST') {
    res.status(200).json(text);
    // res.status(200).json(snapshotText) // snapshotはエラー
  }
};
