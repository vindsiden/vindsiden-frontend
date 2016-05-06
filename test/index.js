import test from 'tape';
import {formatCurrency} from 'utils';

test('Should format currency as Nowegian standard', assert => {
    assert.equal(formatCurrency(0), '0 kr');
    assert.equal(formatCurrency(1000), '1 000 kr');
    assert.equal(formatCurrency(1000000), '1 000 000 kr');
});