export class Family_Information {
    id_profile: number;
    affinity_first_name: string;
    affinity_second_name: string;
    affinity_first_last_name: string;
    affinity_second_last_name: string;
    affinity_phone: string;
    affinity_relationship: string;
    affinity_birthdate: Date;
    constructor(){
        this.id_profile = 0;
        this.affinity_first_name = null;
        this.affinity_second_name = null;
        this.affinity_first_last_name = null;
        this.affinity_second_last_name = null;
        this.affinity_phone = null;
        this.affinity_relationship = null;
        this.affinity_birthdate = null;
    }
}