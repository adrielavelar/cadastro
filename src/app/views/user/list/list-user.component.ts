import { DecimalPipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";

interface User {
    id?: number;
    fullname: string;
    email: string;
    cpf: string;
}

@Component({
    selector: 'app-list-user',
    standalone: true,
    imports: [DecimalPipe, FormsModule, FontAwesomeModule],
    templateUrl: './list-user.component.html',
    styleUrl: './list-user.component.css'
})

export class ListUserComponent implements OnInit {
    faPen = faPen;
    faTrash = faTrash;
    users: User[] = [];
    allUsers: User[] = [];

    ngOnInit(): void {
        this.fetchdata();

    }

    fetchdata() {
        axios.get<User[]>("https://65b94ecfb71048505a8aa165.mockapi.io/api/user")
            .then((response) => {
                this.users = response.data;
                this.allUsers = response.data;
            })
            .catch(error => console.log(error));
    }

    applyFilter(filterValue: any) {
        const filter = filterValue.target.value;

        let filterValueLower = filter.toLowerCase();
        if (filter === '') {
            this.users = this.allUsers;
        }
        else {
            this.users = this.allUsers.filter((user) => user.fullname.includes(filterValueLower))
        }
    }
}
