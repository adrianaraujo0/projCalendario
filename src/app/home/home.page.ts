import { Component, ViewChild } from '@angular/core';
import { IonModal, IonRouterOutlet } from '@ionic/angular';
/* import { format, parseISO } from 'date-fns'; */
import { CalendarComponent, CalendarMode } from 'ionic7-calendar';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  calendar = {
    mode: 'month' as CalendarMode,
    currentDate: new Date(),
  };
  /** ts layot Mes atual(entre as setas) */
  viewTitle='';
  
  @ViewChild(CalendarComponent) myCal!: CalendarComponent;
  @ViewChild('modal') modal!: IonModal; 
  
  /** funcionalidade de card(não sei explicar kk) */
  presentingElement:any = null;

  newEvent: any = {
    title: '',
    allDay: false,
    startTime: null,
    endTime: null,
  };

  showStart = false;
  showEnd = false;

  formattedStart = '';
  formattedEnd = '';


  constructor(private ionRouterOutlet: IonRouterOutlet) {
    this.presentingElement = ionRouterOutlet.nativeEl;
  }

  setToday(){
    this.myCal.currentDate = new Date();
  }


/** (setas) botões esquerda e direita */
  calendarBack() {
    this.myCal.slidePrev();
  }

  calendarForward() {
    this.myCal.slideNext();
  }



  
/* 
  onTimeSelected(ev: { selectedTime: Date; events: any[] }) {
    this.formattedStart = format(ev.selectedTime, 'HH:mm, MMM d, yyyy');
    this.newEvent.startTime = format(ev.selectedTime, "yyyy-MM-dd'T'HH:mm:ss ");

    const later = ev.selectedTime.setHours(ev.selectedTime.getHours() + 1);
    this.formattedEnd = format(later, 'HH:mm, MMM d, yyyy');
    this.newEvent.endTime = format(later, "yyyy-MM-dd'T'HH:mm:ss ");

    if (this.calendar.mode === 'day' || this.calendar.mode === 'week') {
      this.modal.present();
    }
  }

  startChanged(value:any){
    this.newEvent.startTime = value;
    this.formattedStart = format(parseISO(value), 'HH:mm, MMM d, yyyy');
  }

  endChanged(value:any){
    this.newEvent.endTime = value;
    this.formattedEnd = format(parseISO(value), 'HH:mm, MMM d, yyyy');
  }

 */
  scheduleEvent() {}
}
