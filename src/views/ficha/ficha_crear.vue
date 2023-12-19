<template>
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <h1>Sociedad General de Cirujanos de Peru</h1>
                    <h2>TRABAJO FINAL</h2>
                    <div class="mb-3">
                        <label class="form-label">NOMBRE</label>
                        <input v-model="ficha.NOMBRE" type="text" class="form-control">
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
                    <div class="row">
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">LOCALIDAD</label>
                                <input v-model="ficha.LOCALIDAD" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">PROVINCIA</label>
                                <input v-model="ficha.PROVINCIA" type="text" class="form-control">
                            </div>
                        </div>

                    </div>

                    
                    <div class="mb-3">
                        <label class="form-label">FECHA DE NACIMIENTO</label>
                        <input v-model="ficha.FECHADENACIMIENTO" type="text" class="form-control">
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
            <RouterLink class="btn btn-light" to="/curso_listar">Cancelar</RouterLink>
        </div>
    </div>
</template>
<script>

import { collection, getDocs, query, where, addDoc } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig";
import { defineComponent } from 'vue';
export default defineComponent({
    // name: 'scanner',
    data() {
        return {
            loadingDoc: false,
            ficha: {
                nombre: '',
                APELLIDO: '',
                DNI: '',
                DOMICILIO: '',
                LOCALIDAD: '',
                PROVINCIA: '',
                FECHADENACIMIENTO: '',
                CURSO: '',
                TUTORA: '',


            },
        }
    },
    methods: {
        async guardar() {
            try {
                const q = query(collection(db, 'ficha'));
                const docRef = await addDoc(q, this.ficha);
                this.$router.push({ name: 'ficha_listar' })
            } catch (error) {
                console.log(error);
            }
        },
    },
    created() {
    }
})
</script>