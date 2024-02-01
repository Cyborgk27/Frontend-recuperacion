import { Component, OnInit } from '@angular/core';
import { ProfesorService } from 'src/app/Services/profesor.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  profesores: any[] = [];

  constructor(private profesorService: ProfesorService){}

  ngOnInit(): void {
    this.ObtenerProfesores();            
  }

  ObtenerProfesores(): void {
    this.profesorService.getProfesores().subscribe(
      (data) => {
        this.profesores = data;
        console.log(data);
      },
      (error) => {
        console.error('Error al obtener datos de la API', error);
      }
    );
  }
}
