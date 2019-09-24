import {Router} from 'express';

const router = Router();

import { createPhoto, getPhotos, getPhoto, deletePhoto, updatePhoto, sendHello } from '../controllers/photo.controller'
import { sendText } from '../controllers/sms.controller'
import { getToken } from '../controllers/users.controller'
import multer from '../libs/multer'


router.route('/photos')
.post(multer.single('image'), createPhoto)
.get(getPhotos);

router.route('/photos/:id')
.get(getPhoto)
.delete(deletePhoto)
.put(updatePhoto);

router.route('/sms')
.post(sendText);

router.route('/')
.get(sendHello);

router.route('/user')
.post(getToken);




export default router;