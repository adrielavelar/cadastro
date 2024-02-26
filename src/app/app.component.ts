import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../common/components/header/header.component';
import { FooterComponent } from '../common/components/footer/footer.component';
import { CreateUserComponent } from './views/user/create/create-user.component';
import { ListUserComponent } from './views/user/list/list-user.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CreateUserComponent, ListUserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cadastro';
}
