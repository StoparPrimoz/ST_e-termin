import React, { useState, useEffect, useContext } from 'react'
import {
    Dialog,
    Grid,
    makeStyles,
    Typography,
    TextField,
    Button,
    ListItemText,
    ListItem,
    List,
    Divider,
    AppBar,
    Toolbar,
    IconButton,
    Slide,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Collapse
} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import { useTranslation } from "react-i18next";
import AuthContext from "../../context/AuthContext";
import ServicesService from '../../services/ServicesService';
import ReceiptsServiceService from '../../services/ReceiptsService';
import ReceiptsService from '../../services/ReceiptsService';
import Alert from '@material-ui/lab/Alert';
import ReservationService from '../../services/ReservationService';

const useStyles = makeStyles(theme => ({
    appBar: {
        position: 'relative',
        marginBottom: '25px'
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 'auto',
    },
    textField: {
        marginTop: '10px'
    }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function AddReservationReceiptDialog({ isOpen, closeDialog, reservation, refreshReservations, changeSnackbarState }) {
    const classes = useStyles();
    const { t } = useTranslation();
    const Auth = useContext(AuthContext);

    const [errorAlertOpen, setErrorAlertOpen] = useState(false);

    const [vsiZaposleni, setVsiZaposleni] = useState([]);
    const [storitve, setStoritve] = useState([]);

    const [storitevId, setStoritevId] = useState(null);
    const [imeStranka, setImeStranka] = useState("");
    const [priimekStranka, setPriimekStranka] = useState("");
    const [opomba, setOpomba] = useState("");
    const [cena, setCena] = useState("");
    const [izbraniZaposleni, setIzbraniZaposleni] = useState("");

    const handleClose = () => {
        closeDialog();
    };

    useEffect(() => {
        var podjetjeId = Auth.user.company_id;
        ServicesService.storitev_by_company_id(podjetjeId)
            .then((result) => {
                console.log(result);
                var storitev = result.data;
                if (storitev !== undefined) {
                    setStoritve(storitev.ponudba);
                    setVsiZaposleni(storitev.zaposleni);
                    setIzbraniZaposleni(storitev.zaposleni[0]);
                    setStoritevId(storitev.ponudba[0].id);
                    setCena(storitev.ponudba[0].cena);
                    setOpomba(reservation.delo);
                    storitevId(reservation.id_storitev);
                }

            })
            .catch((error) => {
                console.log(error);
            });
        if (reservation) {
            if (reservation.stranka !== undefined) {
                setImeStranka(reservation.stranka.ime);
                setPriimekStranka(reservation.stranka.priimek);
            }
            else {
                if (reservation.ime_stranke !== undefined) {
                    setImeStranka(reservation.ime_stranke);
                }
                if (reservation.priimek_stranke !== undefined) {
                    setPriimekStranka(reservation.priimek_stranke);
                }
            }
        }
    }, [isOpen, reservation]);

    const deleteReservation = (id) => {
        ReservationService.delete_rezervacija(reservation._id).then((response) => {
            console.log(response);
            refreshReservations();
            changeSnackbarState("Successfully finished one reservation.","success");
        }).catch(error => {
            console.log(error)
        })
    }


    const confirmReservation = () => {
        var id_podjetje = Auth.user.company_id;
        var racun = {
            id_storitev: storitevId,
            id_rezervacija: reservation._id,
            ime_stranke: imeStranka,
            priimek_stranke: priimekStranka,
            zaposleni: izbraniZaposleni,
            datum: new Date(),
            opomba: opomba,
            cena: cena,
        };
        console.log(racun);
        ReceiptsService.add_new_racun(id_podjetje, racun)
            .then((result) => {
                console.log(result);
                closeDialog();
                deleteReservation(reservation._id);
            })
            .catch((err) => {
                console.log(err);
                setErrorAlertOpen(true);
            })
    }

    const handleStoritevChange = (event) => {
        setStoritevId(event.target.value);
        var cena = storitve.find(storitev => storitev.id === event.target.value).cena
        setCena(cena);
    }

    const handleZaposleniChange = (event) => {
        setIzbraniZaposleni(event.target.value);
    }

    const errorAlert = (
        <Collapse in={errorAlertOpen}>
            <Alert
                action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        className={classes.closeAlertButton}
                        onClick={() => {
                            setErrorAlertOpen(false);
                        }}
                    >
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                }
                severity="error"
                style={{ border: "solid 1px rgb(255, 224, 220)" }}
            >
                {t("reservations.confirmReservationDialog.error")}
            </Alert>
        </Collapse>
    );

    return (
        <div>
            <Dialog fullScreen open={isOpen} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            {t("reservations.confirmReservationDialog.title")}
                        </Typography>
                        <Button autoFocus color="inherit" onClick={confirmReservation}>
                            {t("reservations.confirmReservationDialog.confirm")}
                        </Button>
                    </Toolbar>
                </AppBar>
                <FormControl variant="outlined" className={classes.formControl}>
                    {errorAlert}
                    <Typography>{t("reservations.confirmReservationDialog.service")}</Typography>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={storitevId}
                        onChange={handleStoritevChange}
                    >
                        {storitve.map((storitev) => (
                            <MenuItem key={storitev.id} value={storitev.id}>{storitev.ime}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl variant="outlined" className={classes.formControl}>
                    <Typography>{t("reservations.confirmReservationDialog.customer")}</Typography>
                    <TextField
                        className={classes.textField}
                        label={t("reservations.confirmReservationDialog.firstName")}
                        variant="outlined"
                        value={imeStranka}
                        onChange={(event) => setImeStranka(event.target.value)}
                    />
                    <TextField
                        className={classes.textField}
                        label={t("reservations.confirmReservationDialog.lastName")}
                        variant="outlined"
                        value={priimekStranka}
                        onChange={(event) => setPriimekStranka(event.target.value)}
                    />
                    <TextField
                        className={classes.textField}
                        label={t("reservations.confirmReservationDialog.price")}
                        variant="outlined"
                        value={cena}
                        onChange={(event) => setCena(event.target.value)}
                    />
                    <TextField
                        className={classes.textField}
                        variant="outlined"
                        label={t("reservations.confirmReservationDialog.note")}
                        multiline
                        rows={3}
                        rowsMax={7}
                        value={opomba}
                        onChange={(event) => setOpomba(event.target.value)}
                    />
                    <Typography>{t("reservations.confirmReservationDialog.employee")}</Typography>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={izbraniZaposleni}
                        onChange={handleZaposleniChange}
                    >
                        {vsiZaposleni.map((zaposleni) => (
                            <MenuItem key={zaposleni.naziv} value={zaposleni}>{zaposleni.naziv}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Dialog>
        </div>
    );
}

export default AddReservationReceiptDialog
