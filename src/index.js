var someTimeConsumingJob = function(){
	return new Promise(function(resolve, reject){
		setTimeout(function(){
			var random = Math.random();
			if(random <= 0.5){
				resolve(random +'success');
			} else {
				reject(random + 'fail');
			}
		}, 3000);
	});
};

var promise = someTimeConsumingJob();

promise.then(function(value) {
    console.log('success:' + value);
}, function(error) {
    console.log('failure:' + error);
});


