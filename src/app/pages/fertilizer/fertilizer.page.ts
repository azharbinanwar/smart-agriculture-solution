import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SearchPage } from 'src/app/model/search/search.page';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-fertilizer',
  templateUrl: './fertilizer.page.html',
  styleUrls: ['./fertilizer.page.scss'],
})
export class FertilizerPage implements OnInit {
  fertilizer: any = null;

  constructor(
    private modalController: ModalController,
    private sharedService: SharedService,
    private router: Router
    
  ) { }

  ngOnInit() {
    console.log("NIONit");

    this.sharedService.getAllfertilizer().subscribe
      ((data: any) => {
        this.fertilizer = data;
        console.log("fertilizer Data", this.fertilizer);
      });
  }
  fertilizerDetail(id) {
    this.router.navigate(['/fertilizer-details', id]);
  }
  async search() {
    const modal = await this.modalController.create({
    component: SearchPage,
    componentProps: { value: 'fertilizer' }
    });
  
    await modal.present();
  
  }

}
