import firebase from "../firebase.js";
import Post from "../Models/posts.js";
import {
    getFirestore,
    collection,
    doc,
    addDoc,
    getDoc,
    getDocs,
    updateDoc,
    deleteDoc,
} from "firebase/firestore";

const db = getFirestore(firebase);

export const createPost = async (req, res, next) => {
    try {
        const data = req.body;
        await addDoc(collection(db, "posts"), data);
        res.status(200).send("post created successfully");
    } catch (error) {
        res.status(400).send(error.message);
    }
};

export const getPosts = async (req, res, next) => {
    try {
        const posts = await getDocs(collection(db, "posts"));
        const postArray = [];

        if (posts.empty) {
            res.status(400).send("No Posts found");
        } else {
            posts.forEach((doc) => {
                const post = new Post(
                    doc.id,
                    // doc.data().postId,
                    doc.data().postImg,
                    doc.data().userId,
                    doc.data().userName,
                    doc.data().description,
                    doc.data().likes,
                    doc.data().funded,
                    doc.data().bettors
                );
                postArray.push(post);
            });

            res.status(200).send(postArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
};

export const getPost = async (req, res, next) => {
    try {
        const id = req.params.id;
        const post = doc(db, "posts", id);
        const data = await getDoc(post);
        if (data.exists()) {
            res.status(200).send(data.data());
        } else {
            res.status(404).send("post not found");
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
};

export const updatePost = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const post = doc(db, "posts", id);
        await updateDoc(post, data);
        res.status(200).send("post updated successfully");
    } catch (error) {
        res.status(400).send(error.message);
    }
};

export const addBettor = async (req, res, next) => {
    try {
        const id = req.params.id;
        const newBettor = req.body; // Assuming the request body contains the new post data

        // console.log(newBettor);

        // Get the existing post document
        const postRef = doc(db, "posts", id);
        const postSnap = await getDoc(postRef);

        if (postSnap.exists()) {
            // Get the existing bettors data
            const existingData = postSnap.data().bettors || {};
            
            existingData.push(newBettor);

            // Update the post document with the updated bettors object
            await updateDoc(postRef, { bettors: existingData});

            res.status(200).send("New post added successfully");
        } else {
            res.status(404).send("Post not found");
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
};

export const patchPost = async (req, res, next) => {
    try {
        const id = req.params.id;
        const dataToUpdate = req.body;

        const postRef = doc(db, "posts", id);
        const postSnap = await getDoc(postRef);

        if (postSnap.exists()) {
            // Merge existing data with the updated data
            const existingData = postSnap.data();
            const updatedData = { ...existingData, ...dataToUpdate };

            // Update the post document with the updated data
            await updateDoc(postRef, updatedData);

            res.status(200).send("Post partially updated successfully");
        } else {
            res.status(404).send("Post not found");
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
};

export const deletePost = async (req, res, next) => {
    try {
        const id = req.params.id;
        await deleteDoc(doc(db, "posts", id));
        res.status(200).send("post deleted successfully");
    } catch (error) {
        res.status(400).send(error.message);
    }
};
