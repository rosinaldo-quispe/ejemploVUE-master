<template>
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <h1>Sociedad General de Cirujanos de Peru</h1>
                    <h2>TRABAJO FINAL</h2>
                    <div class="mb-3">
                        <label class="form-label">nombre</label>
                        <input v-model="ficha.nombre" type="text" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">APELLIDO</label>
                        <input v-model="ficha.APELLIDO" type="text" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">DNI</label>
                        <input v-model="ficha.DNI" type="text" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">DOMICILIO</label>
                        <input v-model="ficha.DOMICILIO" type="tetx" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">LOCALIDAD</label>
                        <input v-model="ficha.LOCALIDAD" type="text" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">C.P</label>
                        <input v-model="ficha.CP" type="text" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">PROVINCIA</label>
                        <input v-model="ficha.PROVINCIA" type="text" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">TELEFONO</label>
                        <input v-model="ficha.TELEFONO" type="text" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">FECHA DE NACIMIENTO</label>
                        <input v-model="ficha.FECHADENACIMIENTO" type="text" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">EDAD</label>
                        <input v-model="ficha.EDAD" type="text" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">CURSO</label>
                        <input v-model="ficha.CURSO" type="text" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">TUTOR/A</label>
                        <input v-model="ficha.TUTORA" type="text" class="form-control">
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <button @click="guardar()" type="button" class="btn btn-primary">Guardar</button>
            <RouterLink class="btn btn-light" to="/ficha_listar">Cancelar</RouterLink>
        </div>
    </div>
</template>
<script>

import { collection, getDocs,getDoc, query, where, addDoc, updateDoc, doc } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig";
import { defineComponent } from 'vue';
export default defineComponent({
    data() {
        return {
            id: this.$route.params.id,
            ficha: {
                nombre: '',
                APELLIDO: '',
                DNI: '',
                DOMICILIO: '',
                LOCALIDAD: '',
                CP: '',
                PROVINCIA: '',
                TELEFONO: '',
                FECHADENACIMIENTO: '',
                EDAD: '',
                CURSO: '',
                TUTORA: '',
               
            },
        }
    },
    methods: {
        async getUrls() {
            try {
                const q = doc(db, "ficha", this.id);
                const respuesta = await getDoc(q);
                this.ficha=respuesta.data()
            } catch (error) {
                console.log(error);
            }
        },
        async guardar() {
            try {
                const q = doc(db, 'ficha',this.id);
                const docRef = await updateDoc(q,this.ficha);
                this.$router.push({ name: 'ficha_listar' })
            } catch (error) {
                console.log(error);
            }
        },
    },
    created() {
        this.getUrls()
    }
})
</script>