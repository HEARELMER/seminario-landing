import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SidebarComponent, HeaderComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  data:any[]=[
    {
      project:'Design System',
      img:'https://www.befunky.com/images/wp/wp-2023-10-05-appdesign-photo-photo.jpg?auto=avif,webp&format=jpg&width=944',
      progress:'90%',
      priority:'High',
    },
    {
      project:'Website designmnenet',
      progress:'90%',
      priority:'High',
      img:'https://res.cloudinary.com/doehxaypl/image/upload/v1661878685/ge-sid-genysys-engine/elcxbxtij2aevuzdsvsr.jpg'
    },
    {
      project:'App design',
      progress:'90%',
      priority:'Meium',
      img:'https://res.cloudinary.com/doehxaypl/image/upload/v1661878685/ge-sid-genysys-engine/elcxbxtij2aevuzdsvsr.jpg'
    },
  ]
}
