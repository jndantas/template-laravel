<template>
    <div>
        <section class="section">
            <template-header name="Usuários" :items="breadcrumbs" ></template-header>
            <div class="section-body">
                <div class="card">
                    <div class="card-header">
                        <h4>Todos Usuários</h4>
                        <button @click="create" type="button" class="btn btn-primary btn-rounded btn-icon float-md-right">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                    <div class="card-body">
                        <vue-good-table
                            :columns="columns"
                            :rows="rows">
                            <template #table-row="props">
                                <span v-if="props.column.field == 'actions'">
                                    <button type="button" @click="edit(props.row)" class="btn btn-info btn-rounded btn-icon mr-2">
                                        <i class="fas fa-edit"></i>
                                      </button>
                                    <button type="button" @click="deleteUser(props.row.id)" class="btn btn-danger btn-rounded btn-icon">
                                        <i class="fas fa-trash-alt"></i>
                                    </button>
                                </span>
                                <span v-else-if="props.column.field == 'created_at'">
                                   {{props.row.created_at_format}}
                                </span>
                                <span v-else>
                                    {{props.formattedRow[props.column.field]}}
                                 </span>
                            </template>
                        </vue-good-table>
                    </div>
                </div>
            </div>
        </section>
        <create-or-edit ref="createOrEdit"></create-or-edit>
    </div>
</template>

<script>
import CreateOrEdit from "./CreateOrEdit";
import TemplateHeader from "../ui/templateHeader";

export default {
    components: {TemplateHeader, CreateOrEdit},
    mounted() {
        this.get()
        this.emitter.on("AfterCreate", () => {
            this.get();
        });
    },
    data(){
        return {
            breadcrumbs:[
                {name: 'Dashboard', route: 'home'},
                {name: 'Usuários'}
            ],
            columns: [
                {
                    label: 'Nome',
                    field: 'name',
                },
                {
                    label: 'Email',
                    field: 'email',
                },
                {
                    label: 'Tipo',
                    field: 'type',
                },
                {
                    label: 'Criado',
                    field: 'created_at',
                },
                {
                    label: 'Ações',
                    field: 'actions',
                },
            ],
            rows: [],
        };
    },
    methods:{
        create(){
            let self = this
            self.$refs.createOrEdit.show()
        },
        edit(user){
            let self = this
            self.$refs.createOrEdit.edit(user)
        },
        get(){
            let self = this
            axios.get("api/user").then( response => {
                self.rows = response.data.users
            }).catch( e => {
                Swal.fire(
                    'Opss...',
                    e.response.data.message,
                    'error'
                )
            })
        },
        deleteUser(id){
            Swal.fire({
                title: 'Você tem certeza?',
                text: "Você não poderá reverter isso.",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sim, apague!'
            }).then((result) => {
                if (result.value) {
                    axios.delete('api/user/' + id).then(()=>{
                        Swal.fire(
                            'Apagado',
                            'Usuário foi apagado',
                            'success'
                        )
                        this.rows = this.rows.filter(a => a.id !== id)
                    }).catch(()=> {
                        Swal.fire("Falhou!", "Houve algum erro.", "warning");
                    });
                }
            })
        }
    }
}
</script>
