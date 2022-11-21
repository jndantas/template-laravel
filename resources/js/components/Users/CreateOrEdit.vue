<template>
    <div class="modal fade" id="createOrEditUSer" tabindex="-1" aria-labelledby="CreateOrEditUserLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="CreateOrEditUserLabel">{{ editMode ? 'Editar Usuário' : 'Novo Usuário' }}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <form @submit.prevent="editMode ? update() : create()">
                    <div class="modal-body">
                        <div class="form-group">
                            <input v-model="form.name" type="text" name="name"
                                   placeholder="Nome"
                                   class="form-control" :class="{ 'is-invalid': form.errors.has('name') }">
                            <has-error :form="form" field="name"></has-error>
                        </div>

                        <div class="form-group" v-if="!editMode">
                            <input v-model="form.email" type="text" name="email"
                                   placeholder="Email"
                                   class="form-control" :class="{ 'is-invalid': form.errors.has('email') }">
                            <has-error :form="form" field="email"></has-error>
                        </div>

                        <div class="form-group">
                            <textarea v-model="form.bio" name="bio" id="bio"
                                      placeholder="Curta Descrição (Opcional)"
                                      class="form-control" :class="{ 'is-invalid': form.errors.has('bio') }"></textarea>
                            <has-error :form="form" field="bio"></has-error>
                        </div>

                        <div class="form-group">
                            <select name="type" v-model="form.type" id="type" class="form-control" :class="{ 'is-invalid': form.errors.has('type') }">
                                <option value="">Selecione a Função</option>
                                <option value="admin">Admin</option>
                                <option value="user">Usuário</option>
                                <option value="moderator">Moderador</option>
                            </select>
                            <has-error :form="form" field="type"></has-error>
                        </div>

                        <div class="form-group" v-if="!editMode">
                            <input v-model="form.password" type="password" name="password"
                                   placeholder="Senha"
                                   class="form-control" :class="{ 'is-invalid': form.errors.has('password') }">
                            <has-error :form="form" field="password"></has-error>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                        <button type="submit" class="btn btn-primary">{{ editMode ? 'Salvar' : 'Criar' }}</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import Form from "vform";

export default {
    name: "CreateOrEdit",
    data(){
        return{
            editMode: false,
            form: new Form({
                id:'',
                name : '',
                email: '',
                password: '',
                type: '',
                bio: '',
                photo: ''
            })
        }
    },
    methods:{
        show() {
            let self = this
            self.editMode = false;
            self.form.reset();
            $('#createOrEditUSer').modal('show');
        },
        edit(user) {
            let self = this
            self.editMode = true;
            self.form.fill(user);
            $('#createOrEditUSer').modal('show');
        },
        close() {
            let self = this
            self.editMode = false;
            self.form.reset();
            $('#createOrEditUSer').modal('hide');
        },
        create(){
            let self = this
            self.$Progress.start();
            self.form.post('/api/user')
                .then((response) =>{
                    console.log(response)
                    self.emitter.emit('AfterCreate');
                    $('#createOrEditUSer').modal('hide')
                    Swal.fire(
                        'Adicionado',
                        response.data.message,
                        'success'
                    )
                    this.$Progress.finish();
                })
                .catch((error)=>{
                    console.log(error)
                    this.$Progress.finish();
                })
        },
        update() {
            let self = this
            self.$Progress.start();
            self.form.put('api/user/'+this.form.id)
                .then(() => {
                    $('#createOrEditUSer').modal('hide');
                    Swal.fire(
                        'Atualizado',
                        'Informações Atualizadas',
                        'success'
                    )
                    self.$Progress.finish();
                    self.emitter.emit('AfterCreate');
                })
                .catch(() => {
                    self.$Progress.fail();
                });
        },
    }
}
</script>

<style scoped>

</style>
