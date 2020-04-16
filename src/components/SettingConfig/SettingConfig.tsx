import React, { useState } from 'react';
import Checkbox from '../Checkbox';
import { Textarea } from '../Input';

function SettingConfig(props: {
  suppressMerchantPassword: boolean;
  setSuppressMerchantPassword: Function;
  handleSaveSetting: Function;
}) {
  const { suppressMerchantPassword, setSuppressMerchantPassword, handleSaveSetting } = props;
  const [sigFlow, setSigFlow] = useState(window.localStorage.getItem('sig_flow_from_eftpos') === 'true');
  const [eftposReceipt, setEftposReceipt] = useState(window.localStorage.getItem('rcpt_from_eftpos') === 'true');
  const [printMerchantCopy, setPrintMerchantCopy] = useState(
    window.localStorage.getItem('print_merchant_copy_input') === 'true'
  );
  const [receiptHeader, setReceiptHeader] = useState(window.localStorage.getItem('receipt_header_input') || '');
  const [receiptFooter, setReceiptFooter] = useState(window.localStorage.getItem('receipt_footer_input') || '');
  return (
    <div>
      <h2 className="sub-header">Setting</h2>
      <div className="mr-3 ml-3">
        <Checkbox
          type="checkbox"
          id="check-receipt-eftpos"
          label="Receipt from EFTPOS"
          checked={eftposReceipt}
          onChange={(e: any) => {
            setEftposReceipt(e.target.checked);
          }}
        />
        <Checkbox
          type="checkbox"
          id="check-sig-eftpos"
          label="Sig from EFTPOS"
          checked={sigFlow}
          onChange={(e: any) => {
            setSigFlow(e.target.checked);
          }}
        />
        <Checkbox
          type="checkbox"
          id="print-merchant-copy"
          label="Print Merchant Copy"
          checked={printMerchantCopy}
          onChange={(e: any) => {
            setPrintMerchantCopy(e.target.checked);
          }}
        />
        <Checkbox
          type="checkbox"
          id="suppress-merchant-password"
          label="Suppress Merchant Password"
          checked={suppressMerchantPassword}
          onChange={(e: any) => {
            setSuppressMerchantPassword(e.target.checked);
          }}
        />
        <Textarea
          id="receipt-header"
          name="Receipt-header"
          label="Receipt header"
          value={receiptHeader}
          onChange={(e: any) => {
            setReceiptHeader(e.target.value);
          }}
        />
        <Textarea
          id="receipt-footer"
          name="Receipt-footer"
          label="Receipt footer"
          value={receiptFooter}
          onChange={(e: any) => {
            setReceiptFooter(e.target.value);
          }}
        />
        <button
          type="button"
          className="primary-button"
          id="btnApply"
          onClick={() => {
            handleSaveSetting(eftposReceipt, sigFlow, printMerchantCopy, receiptHeader, receiptFooter);
          }}
        >
          Save &amp; Apply
        </button>
      </div>
    </div>
  );
}

export default SettingConfig;
