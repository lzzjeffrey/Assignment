const PAGES  = {
    login: 'http://bo.flashtechsolution.net/',
    report: 'http://bo.flashtechsolution.net/Admin/Report/LicenseeWinLose.aspx',
    logout: 'http://bo.flashtechsolution.net/main/logout.ashx'
}

const SELECTORS = {
    partner: '#partnerCode',
    username: '#userName',
    password: '#password',
    login: '#btn-login'
    


}

module.exports = {
    pages: PAGES,
    selectors: SELECTORS
}