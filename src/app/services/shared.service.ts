import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators'
import { CommonConst } from '../model/firebase/common-const';
import { firestore } from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  currentTitle(currentTitle: any) {
    throw new Error("Method not implemented.");
  }

  city: string;
  title: any;

  private collection: AngularFirestoreCollection<any>;


  constructor(
    private httpClinet: HttpClient,
    private fireStore: AngularFirestore,
  ) { }
  getProfile(uid: string) {
    this.collection = this.fireStore.collection<any>(CommonConst.USERS);
    let data = this.collection.doc(uid).valueChanges();
    return data;
  }
  getWeather() {
    this.city = "Lahore";
    return this.httpClinet.get(
      // units=imperial
      "http://api.openweathermap.org/data/2.5/weather?q=" + this.city + "&appid=bd4d62acd75540f169713ca6045f34ac&units=metric");

  }
  getForcastWeather() {
    this.city = "Lahore"
    return this.httpClinet.get(
      "http://api.openweathermap.org/data/2.5/onecall?lat=31.5204&lon=74.3587&units=metric&appid=bd4d62acd75540f169713ca6045f34ac"
    );
  }
  getAllNews() {
    var newCollection = this.fireStore.collection<any>(CommonConst.NEWS);
    var newData = newCollection.snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
      );
    return newData;
  }
  getAllCropDisease() {
    var newCollection = this.fireStore.collection<any>(CommonConst.CROP_DISEASE);
    var newData = newCollection.snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
      );
    return newData;
  }
  getAllfertilizer() {
    var newCollection = this.fireStore.collection<any>(CommonConst.FERTILIZER);
    var newData = newCollection.snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
      );
    return newData;
  }
  getAllpesticides() {
    var newCollection = this.fireStore.collection<any>(CommonConst.PESTICIDES);
    var newData = newCollection.snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
      );
    return newData;
  }
  getSingleNews(newsId: string) {
    this.collection = this.fireStore.collection<any>(CommonConst.NEWS);
    let data = this.collection.doc(newsId).valueChanges();
    return data;
  }
  postNewsComment(uid: string, news_id: string, comment_text: string) {
    const newsComment = {
      uid: uid,
      news_id: news_id,
      comment_text: comment_text,
      date_posted: new Date()
    }
    console.log(newsComment);

    this.fireStore.collection<any>(CommonConst.NEWS_COMMENTS).add(newsComment)
      .then((decFef: any) => {
        this.fireStore.doc(`${CommonConst.NEWS}/${news_id}`)
          .update({
            comment: firestore.FieldValue.arrayUnion(decFef.id)
          });
      })
      .catch((e: any) => {
        console.log(e.message);
      });
  }
  geNewsComments(news_id: string) {
    this.collection = this.fireStore.collection<any>(
      CommonConst.NEWS_COMMENTS,
      ref => ref.where("news_id", "==", news_id)
        .orderBy("date_posted", "desc")
    );
    var data = this.collection.snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
      );
    return data;
  }
  toggleLike(uid: string, likes: Array<string>, news_id: string) {
    console.log("likes", likes);

    if (likes.indexOf(uid) == -1)
      this.fireStore.doc(`${CommonConst.NEWS}/${news_id}`).update({ like: firestore.FieldValue.arrayUnion(uid) })
    else
      this.fireStore.doc(`${CommonConst.NEWS}/${news_id}`).update({ like: firestore.FieldValue.arrayRemove(uid) })
  }
  getTreatmentDetails(treatmentId: string) {
    this.collection = this.fireStore.collection<any>(CommonConst.CROP_DISEASE);
    let data = this.collection.doc(treatmentId).valueChanges();
    return data;
  }
  getExperts() {
    var expertsCollection = this.fireStore.collection<any>(CommonConst.EPXPERTS);
    var expertsData = expertsCollection.snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
      );
    return expertsData;

  }
  getFertilizerDetails(fertilizerId: string) {
    this.collection = this.fireStore.collection<any>(CommonConst.FERTILIZER);
    let data = this.collection.doc(fertilizerId).valueChanges();
    return data;
  }
  getPesticideDetails(pesticideId: string) {
    this.collection = this.fireStore.collection<any>(CommonConst.PESTICIDES);
    let data = this.collection.doc(pesticideId).valueChanges();
    return data;
  }
  searchByQuery(tags: Array<string>, db: string) {
    var expertsCollection = this.fireStore
    .collection<any>(db, ref => ref 
      .where("searching_tags", "array-contains-any", tags))
    var expertsData = expertsCollection.snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
      );
    return expertsData;
  }
}