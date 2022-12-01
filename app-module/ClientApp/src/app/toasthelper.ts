import { ToastController } from "@ionic/angular";

export async function toast(color: string, message: string, toastController: ToastController) {
    let toast = await toastController.create({
      message: message,
      duration: 1000,
      position: 'bottom',
      color: color
    });
    await toast.present();
  }