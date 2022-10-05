import { Injectable } from "@angular/core";
import { addDoc, collection, doc, Firestore, updateDoc } from "@angular/fire/firestore";
import { getDownloadURL, ref, Storage, uploadBytes } from "@angular/fire/storage";
import { from, Observable, switchMap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AddCourseCategoryService {

    constructor(
        private firestore: Firestore,
        private storage: Storage
    ) { }

    addCourseCategory = (categoryData: any) => {
        return from(addDoc(collection(this.firestore, 'course-categories'), categoryData));
    }

    updateCourseCategory = (categoryData: any) => {
        let ref = doc(this.firestore, 'course-categories', categoryData.id);
        return from(updateDoc(ref, categoryData));
    }

    uploadCategoryImage = (image: File, path: string): Observable<string> => {
        let storageRef = ref(this.storage, path);
        let uploadTask = from(uploadBytes(storageRef, image));
        return uploadTask.pipe(
            switchMap((result) => getDownloadURL(result.ref))
        )
    }
}