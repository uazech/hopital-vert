import {SOLDE_FINANCIER_MAX, SOLDE_SOCIAL_MAX} from "../questions";

const UUID = "UUID";
const SCORE_ENVIRONNEMENTAL = "score_environnemental";
const IMPACT_ENVIRONNEMENTAL = "impact_environnemental";
const IMPACT_FINANCIER = "impact_financier";
const IMPACT_SOCIAL = "impact_social";
const SESSION = "session";
const SOLDE_FINANCIER = "solde_financier";
const SOLDE_SOCIAL = "solde_social";
const QUESTION_NUMBER = "question_number";

export const SCORE_ENVIRONNEMENTAL_INIT = 31074;
export const SOLDE_FINANCIER_INIT = 200;
export const SOLDE_SOCIAL_INIT = 15;

export function getSoldeFinancier() {
    return getIntValueOrZero(SOLDE_FINANCIER);
}

export function getQuestionNumber() {
    return getIntValueOrZero(QUESTION_NUMBER);
}


export function getUUID() {
    const uuid = localStorage.getItem(UUID);
    if (uuid === null) {
        const newUUID = crypto.randomUUID();
        setInStorage(UUID, uuid)
        return newUUID;
    }
    return uuid;
}

export function getSession() {
    return localStorage.getItem(SESSION);
}


export function getScoreEnvironnemental() {
    return getIntValueOrZero(SCORE_ENVIRONNEMENTAL);
}

export function getSoldeSocial() {
    return getIntValueOrZero(SOLDE_SOCIAL);
}

export function setSoldeFinancier(soldeFinancier) {
    soldeFinancier = Math.min(soldeFinancier, SOLDE_FINANCIER_MAX)
    setInStorage(SOLDE_FINANCIER, soldeFinancier)
}

export function setScoreEnvironnemental(scoreEnvironnemental) {
    setInStorage(SCORE_ENVIRONNEMENTAL, scoreEnvironnemental)
}

export function setSoldeSocial(soldeSocial) {
    soldeSocial = Math.min(soldeSocial, SOLDE_SOCIAL_MAX)
    setInStorage(SOLDE_SOCIAL, soldeSocial)
}

export function initData(session) {
    setInStorage(UUID, crypto.randomUUID());
    if (session) {
        setInStorage(SESSION, session)
    }
    setScoreEnvironnemental(SCORE_ENVIRONNEMENTAL_INIT);
    setSoldeFinancier(SOLDE_FINANCIER_INIT)
    setSoldeSocial(SOLDE_SOCIAL_INIT)
    setQuestionNumber(0)
}


export function setQuestionNumber(questionNumber) {
    setInStorage(QUESTION_NUMBER, questionNumber)
}

export function setResponse(response) {
    setInStorage(IMPACT_ENVIRONNEMENTAL, response["impact_environnemental"])
    setInStorage(IMPACT_FINANCIER, response["impact_financier"])
    setInStorage(IMPACT_SOCIAL, response["impact_social"])
}

export function getImpactEnvironnemental() {
    return getIntValueOrZero(IMPACT_ENVIRONNEMENTAL)
}

export function getImpactFinancier() {
    return getIntValueOrZero(IMPACT_FINANCIER)
}

export function getImpactSocial() {
    return getIntValueOrZero(IMPACT_SOCIAL)
}

function setInStorage(key, value) {
    localStorage.setItem(key, value)
}

function getIntValueOrZero(key) {
    let value = localStorage.getItem(key);
    if (value === null) {
        return 0;
    }
    return parseInt(value);
}