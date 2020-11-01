export class Employee {
    id: number;
    name: string;
    last_name: string;
    birthday: Date;

}

export class Groups {
    id: number;
    name: string;
}

export class Group {
    id: number;
    name: string;
    group_id: number;
    check: boolean;
}