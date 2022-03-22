window.spasisofia = window.spasisofia || {};

spasisofia.SubscriptionOptions = function() {
	this.subscriptionAmounts = document.querySelectorAll('#subscription-amount-options li');
	this.paypalPackage = document.querySelector('#paypal-form input[name="os0"]');
	this.patreonPackageId = document.querySelector('#patreon-form input[name="rid"]');
}

spasisofia.SubscriptionOptions.prototype.install = function() {
	this.subscriptionAmounts.forEach(function(subscriptionOption) {
		subscriptionOption.addEventListener('click', function() {
			this._select(subscriptionOption);
		}.bind(this));
	}.bind(this))
}

spasisofia.SubscriptionOptions.prototype._select = function(subscriptionOption) {
	this._selectSubscriptionsOnPaymentPlatforms(subscriptionOption);
	this._visuallyIndicateAsSelected(subscriptionOption);
}

spasisofia.SubscriptionOptions.prototype._selectSubscriptionsOnPaymentPlatforms = function(subscriptionOption) {
	this.paypalPackage.value = subscriptionOption.dataset.paypalPackage;
	this.patreonPackageId.value = subscriptionOption.dataset.patreonPackageId;
}

spasisofia.SubscriptionOptions.prototype._visuallyIndicateAsSelected = function(subscriptionOption) {
	this.subscriptionAmounts.forEach(function(amount) {
		amount.classList.remove("selected");
	}.bind(this));
	subscriptionOption.classList.add("selected");
}

document.addEventListener('DOMContentLoaded', function() {
	new spasisofia.SubscriptionOptions().install();
})
