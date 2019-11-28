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
								<v-tooltip top>
									<template v-slot:activator="{ on }">
								        <v-btn 
											icon v-on="on"
										>
											<v-icon>mdi-close</v-icon>
										</v-btn>
								    </template>
								    <span>{{$t('close')}}</span>
								</v-tooltip>
							</v-toolbar>
							<v-card-text>
								<v-form>
									<v-text-field
										:label="$t('label.identification')"
										name="indentification"
										prepend-icon="person"
										type="text"
									/>
										
									<v-text-field
										:label="$t('label.email')"
										name="email"
										prepend-icon="email"
										type="email"
									/>

									<v-text-field
										:label="$t('label.password')"
										name="password"
										prepend-icon="lock"
										type="password"
									/>

								</v-form>
							</v-card-text>
							<v-card-actions>
								<v-spacer/>
								<v-btn color="primary">{{$t('login')}}</v-btn>
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

			}
		},
	}
</script>