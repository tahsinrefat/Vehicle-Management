# Copyright (c) 2024, Tahsin Ahmed Refat and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class VehiclePrice(Document):
	# pass
    def validate(self):
        print('CALCULATING CALCULATING CALCULATING CALCULATING CALCULATING CALCULATING CALCULATING CALCULATING')
        print('CALCULATING CALCULATING CALCULATING CALCULATING CALCULATING CALCULATING CALCULATING CALCULATING')
        if not self.company_price or not self.customer_price:
            frappe.throw("Company Price and Customer Price must be provided.")
        self.sale_price = self.company_price + self.customer_price
        
        grand_total = self.sale_price
        for item in self.other_items:
            if not item.quantity or not item.rate:
                frappe.throw(f"Quantity and Rate must be provided for {item.item}.")
            item.amount = item.quantity * item.rate
            grand_total += item.amount

        self.grand_total = grand_total
