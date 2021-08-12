import React, { memo } from "react"
import { Card, Typography, Button, Select, MenuItem } from '../../../components'
import COUNTRIES from "../../../commons/constants/countries"
import { CardPanelContentStyled, ItemStyled } from "./style"
import refreshIcon from "../../../assets/images/refresh.svg"

const navigatorHasShare = navigator.share

function Panel({ updateAt, onChange, data, country, getCoviddata, handleRefresh }) {
    const { cases, recovered, deaths, todayCases, todayDeaths } = data

    const renderCountries = (country, index) => (
        <MenuItem key={`country-${index}`} value={country.value}>
            <ItemStyled>
                <div>{country.label}</div>
                <img src={country.flag} alt={`País-${country.label}`} />
            </ItemStyled>
        </MenuItem>
    )

    const textCovid19 = `País: ${country} - recuperados: ${recovered}`

    const copyInfo = () => {
        navigator.clipboard.writeText(textCovid19)
    }

    const shareInfo = () => {
        navigator.share({
            title: `Dados do Covid19 - ${country}`,
            text: textCovid19,
            url: 'https://covid19dio.netlify.app/'
        })
    }

    const refreshInfo = () => {
        handleRefresh(country)
    }

    const renderShareButton = (
        <div>
            <Button variant="contained" color="primary" onClick={shareInfo}>
                Compartilhar
            </Button>
        </div>
    )

    const renderCopyButton = (
        <div>
            <Button variant="contained" color="primary" onClick={copyInfo}>
                Copiar
            </Button>
        </div>
    )

    const renderRefreshButton = (
        <div>
            <Button variant="contained" onClick={refreshInfo}>
                <img src={refreshIcon} alt="atualizar" />
            </Button>
        </div>
    )

    return (
        <Card>
            <div id="btnPanel">
                <Typography variant="p" component="span" color="primary"> *Atualizado em : {updateAt}</Typography>
            </div>
            <CardPanelContentStyled>
                <div>
                    <div className="pt-4">
                        <Typography variant="h1" component="span" color="primary"> Painel COVID-19 </Typography>
                    </div>
                    <div className="pt-2">
                        <Select onChange={onChange} value={country}>
                            {COUNTRIES.map(renderCountries)}
                        </Select>
                    </div>
                </div>
            </CardPanelContentStyled>

            <div id="btnPanel">
                <div id="btnPanel">
                    {renderRefreshButton}
                </div>
                <div id="btnPanel">
                    {navigatorHasShare ? renderShareButton : renderCopyButton}
                </div>
            </div>

        </Card >
    )
}

export default memo(Panel)