<?php

    if (!function_exists('rg_activity_description')) {
        function rg_activity($activities)
        {
        	foreach ($activities as &$activity) {
        		$link = null;
				switch ($activity->subject_type) {
					case 'Rutatiina\FinancialAccounting\Models\Txn':
						$activity->rg_description = "Transaction " . $activity->description;
						break;
					case 'Rutatiina\FinancialAccounting\Models\AccountBalance':
						$activity->rg_description = "Account Balance " . $activity->description;
						break;
					case 'Rutatiina\FinancialAccounting\Models\ContactBalance':
						$activity->rg_description = "Contact balance " . $activity->description;
						break;
					case 'Rutatiina\FinancialAccounting\Models\TxnNumber':
						$activity->rg_description = "Transaction number " . $activity->description;
						break;
					case 'Rutatiina\Contact\Models\Contact':
						$activity->rg_description = "Contact " . $activity->description;
						$link = route('contacts.show', $activity->subject_id);
						break;
				}
				$activity->link = $link;
			}
            return $activities;
        }
    }
