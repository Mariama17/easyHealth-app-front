/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import img from '../images/easy-health.png';
import { styled } from '@mui/material/styles';
import Footer from './footer';
import {
	TableContainer,
	tableCellClasses,
	Table,
	TableHead,
	TableBody,
	TableRow,
	TableCell,
	Button,
	Typography,
	Grid,
	TextField,
	InputAdornment,
	Box,
	Paper,
} from '@mui/material';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: '#0658c2',
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(odd)': {
		backgroundColor: theme.palette.action.hover,
	},
	// hide last border
	'&:last-child td, &:last-child th': {
		border: 0,
	},
}));


class Admin extends React.Component {
	render() {
		return (
			<div className='allProfilPage'>
                <div className='headerProfil'>
                    <span style={{ position: 'absolute', marginLeft: '45%', top: '0px' }}>
                        <img src={img} width="20%" />
                    </span>
                <Grid>
                    {/* <Button style={{width:160, height: 30, background: ' white ', color: '#1846a3', border: 'none', fontFamily: 'Work Sans', fontStyle:'normal', marginTop:'2%', marginLeft: '85%'}}>
                    <b>
                        Se déconnecter
                    </b>
                	</Button> */}
            </Grid>
                </div>
                <br/><br/><br/><br/><br/><br/><br/><br/>
				<Grid container spacing={{ sm: 4, md: 6 }}>
					<Grid item xs={12} sm={7} md={6} sx={{ display: 'flex', flexDirection: 'column'}}>
						<Box
							component={Paper}
							elevation={6}
							sx={{
								ml: 1,
								pl: 4,
								width: '100%',
								minHeight: '85vh',
								maxHeight: '100vh',
								borderColor: 'primary.main',
								opacity: [1, 1, 1],
							}}
						>
                        <br/>
							<Grid container spacing={{ sm: 4, md: 6 }} sx={{ height: '70%'}}>
								<Grid item>
									<Typography component='p' variant='h4'>
										Liste des médecins inscrits
									</Typography>
								</Grid>
								<Grid item xs={12} sm={12} md={12}>
									<TextField
										id='search'
										placeholder='Nom, prénom, spécialité'
										label='Rechercher un médecin'
										// onChange={(event) => this.getUserByFirstOrLastNameOrLogin(event.target.value)}
										InputProps={{
											startAdornment: (
												<InputAdornment position='start'>
													<SearchOutlinedIcon />
												</InputAdornment>
											),
										}}
										variant='outlined'
										sx={{ width: '50%' }}
									/>
								</Grid>
								<Grid item>
									{/* <Skeleton animation='wave' variant='rectangular' width={600} height={200} marginLeft={4}/> */}
										<TableContainer component={Paper} elevation={6} >
											<Table sx={{ width: '100%'}} aria-label='customized table'>
												<TableHead>
													<TableRow>
														<StyledTableCell>
                                                            Nom
														</StyledTableCell>
														<StyledTableCell align='right'>
															Prénom
														</StyledTableCell>
														<StyledTableCell align='right'>
															Spécialité
														</StyledTableCell>
                                                        <StyledTableCell align='right'>
															Modifier
														</StyledTableCell>
														<StyledTableCell align='right'>
															Supprimer
														</StyledTableCell>
													</TableRow>
												</TableHead>
												<TableBody>
													<StyledTableRow>
														<StyledTableCell component='th' scope='row'>
															Doe
														</StyledTableCell>
														<StyledTableCell align='right'>
                                                            John
                                                        </StyledTableCell>														
														<StyledTableCell align='right'>
                                                            Cardiologue
                                                        </StyledTableCell>
														<StyledTableCell align='right'>
															<Button color='info'>
																<DriveFileRenameOutlineIcon fontSize='large' />
															</Button>
														</StyledTableCell>
														<StyledTableCell align='right'>
															<Button color='error'>
																<PersonRemoveIcon fontSize='large' />
															</Button>
														</StyledTableCell>
													</StyledTableRow>	
												</TableBody>
											</Table>
										</TableContainer>
								</Grid>
							</Grid>
						</Box>
					</Grid>
					<Grid item xs={12} sm={5} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
						<Grid container spacing={4}>
							<Grid item xs={12} sm={12} md={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
								<Typography component='p' variant='h4'>
									Ajouter un nouveau médecin
								</Typography>
							</Grid>
							<Grid item xs={12} sm={12} md={12}>
								<Box component='form' onSubmit={this.addUser}>
									<Grid container spacing={2}>
										<Grid item xs={12} sm={12} md={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
											<TextField
												id='lastName'
												autoComplete={true}
												label='Nom'
												helperText='Nom'
												variant='filled'
												sx={{ width: '80%' }}
											/>
										</Grid>
										<Grid item xs={12} sm={12} md={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
											<TextField
												id='firstName'
												autoComplete={true}
												label='Prénom'
												helperText='Prénom'
												variant='filled'
												sx={{ width: '80%' }}
											/>
										</Grid>
										<Grid item xs={12} sm={12} md={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
											<TextField
												id='spécialite'
												autoComplete={true}
												label='Spécialité'
												helperText='Spécialté'
												variant='filled'
												sx={{ width: '80%' }}
											/>
										</Grid>
										<Grid item xs={12} sm={12} md={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
											<TextField
												id='login'
												autoComplete={true}
												label='Login'
												helperText='Login'
												variant='filled'
												sx={{ width: '80%' }}
											/>
										</Grid>
										<Grid item xs={12} sm={12} md={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
											<TextField
												id='password'
												type='password'
												autoComplete={true}
												label='Mot de passe'
												helperText='Mot de passe'
												variant='filled'
												sx={{ width: '80%' }}
											/>
										</Grid>
										<Grid item xs={12} sm={12} md={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
											<Button color='primary' variant='outlined' onClick={this.addUser} sx={{ width: '80%' }}>
												ajouter
											</Button>
										</Grid>
										<Grid item xs={12} sm={12} md={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
											<Button color='error' variant='outlined' onClick={this.resetForm} sx={{ width: '80%' }}>
												Annuler
											</Button>
										</Grid>
									</Grid>
								</Box>
							</Grid>
						</Grid>
					</Grid> 
				</Grid>
                <br/><br/><br/>
                <Footer />
			</div>
		);
	}
}

export default Admin;
