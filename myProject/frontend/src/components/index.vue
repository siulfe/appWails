<template>
	<v-app >
		<v-content class="background-principal">
			<v-container
				class="fill-height"
				fluid
			>
				<v-row
					align="center"
					justify="center"
				>
					<v-col
						cols="12" sm="8" md="4" lg="4"
					>
						<v-card
							class="elevation-12"
						>
							<v-toolbar
								color="primary"
								dark
								flat
							>
								<v-toolbar-title>{{$t('logo')}}</v-toolbar-title>
								<v-spacer />
								<v-tooltip top >
									<template v-slot:activator="{ on }">
								        <v-btn @click="limpiar()"
											icon v-on="on"
										>
											<v-icon>mdi-close</v-icon>
										</v-btn>
								    </template>
								    <span>{{$t('clear')}}</span>
								</v-tooltip>
							</v-toolbar>
							<v-card-text>
								<v-form>
									<v-text-field
										v-model="identification"
										:label="$t('label.identification')"
										name="indentification"
										prepend-icon="person"
										type="text"
										:error="errorIdentification"
										clearable
									/>
										
									<v-text-field
										v-model="email"
										:label="$t('label.email')"
										name="email"
										prepend-icon="email"
										type="email"
										:error="errorEmail"
										clearable
									/>

									<v-text-field
										v-model="password"
										:label="$t('label.password')"
										name="password"
										prepend-icon="lock"
										type="password"
										:error="errorPassword"
										clearable
									/>

									<v-select v-model="participant" :error="errorParticipant" :items="participantsComputed" label="Tipo de Cuenta" filled clearable></v-select>

								</v-form>
							</v-card-text>
							<v-card-actions>
								<v-spacer/>
								<v-btn color="primary" @click="logear()">{{$t('login')}}</v-btn>
							</v-card-actions>
						</v-card>
					</v-col>
				</v-row>
			</v-container>
		</v-content>
	</v-app>
</template>

<script type="text/javascript">
	export default{
		data(){
			return{
				identification:"",
				email:"",
				password:"",
				participant:"",
				participants: [],
				errorIdentification:false,
				errorEmail:false,
				errorPassword:false,
				errorParticipant:false,
			}
		},
		methods:{
			logear(){
				if (this.validar()){
					return
				}

				var cuenta = {
					identification : this.identification,
					email: this.email,
					password: this.password,
					participant: this.participant
				}

				window.backend.Login.Logear(cuenta).then(resp =>{
					if(resp == 0){
						this.$toastr.warning(this.$i18n.t("invalidUser"))
					}else{
						this.$router.push("prueba")
					}


				})
			},
			limpiar(){
				this.identification=""
				this.email=""
				this.participant=""
				this.participant=""
				this.errorIdentification = false
				this.errorEmail = false
				this.errorPassword = false
				this.errorParticipant = false
			},
			validar(){
				var resp = false
				if(this.identification == null || this.identification == '' || this.identification.length > 255) {
					resp = true
					this.errorIdentification=true
				}else
					this.errorIdentification = false
				
				if(this.email == null || this.email == '' || this.email.length > 255){
					resp = true
					this.errorEmail = true
				}else
					this.errorEmail = false
				
				if(this.password == null || this.password == '' || this.password.length > 255){
					resp = true
					this.errorPassword = true
				}else
					this.errorPassword = false
				

				if(this.participant == null || this.participant == '' || this.participant.length > 255){
					resp = true
					this.errorParticipant = true
				}else
					this.errorParticipant = false
				
				return resp
			}
		},
		computed:{
			participantsComputed(){
				this.participants = [
					{text:this.$i18n.tc("debtor",0), value:1},
					{text:this.$i18n.tc("supplier",0), value:2},
					{text:this.$i18n.tc("confirmant",0), value:3},
					{text:this.$i18n.tc("factor",0), value:4}
				]

				return this.participants
			}
		}
	}
</script>