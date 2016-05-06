import numbro from 'numbro';
import no from 'numbro/languages/nb-NO';
numbro.culture('nb-NO', no);
numbro.culture('nb-NO');

export function formatCurrency(val) {
    return numbro(val).format("0,0") + ' kr';
}