<template>
    <v-container>
        <v-row no-gutters>
            <v-col sm="10" class="mx-auto">
                <v-card class="pa-5">
                    <v-card-title>Agregar nuevo comunicado</v-card-title>
                    <v-divider></v-divider>
                    <v-form ref="form" @submit.prevent="submitForm" class="pa-5" enctype="multipart/form-data">
                        <v-text-field label="Asunto" v-model="post.titulo" prepend-icon="mdi-note" :rules="rules"></v-text-field>
                        <v-text-field label="Nombre Completo" v-model="post.nombre" prepend-icon="mdi-account" :rules="rules"></v-text-field>
                        <v-text-field label="Correo Electrónico" v-model="post.correo" prepend-icon="mdi-email" :rules="emailRules"></v-text-field>
                        <v-textarea label="Comentarios" v-model="post.contenido" prepend-icon="mdi-note-plus" :rules="rules"></v-textarea>
                        <v-btn type="submit" class="mt-3" color="primary">Agregar Comentario</v-btn>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import API from "../api";
export default {
    data(){
        return{
            rules: [(value) => !!value || "Este campo es requerido!"],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid',
            ],
            post:{
                titulo: "",
                nombre: "",
                correo: "",
                contenido: "",
            },
            image:"",
        };
    },
    methods: {
        async submitForm(){
            const formData = new FormData();
            formData.append('titulo', this.post.titulo);
            formData.append('nombre', this.post.nombre);
            formData.append('correo', this.post.correo);
            formData.append('contenido', this.post.contenido);
            if(this.$refs.form.validate()){
                const response = await API.addPost(formData);
                this.$router.push({ name: 'home', params: {message: response.message}});
            }
            
        },
    },
};
</script>