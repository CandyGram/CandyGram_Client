var app = {
	// Application Constructor
	initialize : function() {
		alert("Trial 3");
		this.bindEvents();
	},
	// Bind Event Listeners
	//
	// Bind any events that are required on startup. Common events are:
	// 'load', 'deviceready', 'offline', and 'online'.
	bindEvents : function() {
		// document.addEventListener('deviceready', this.onDeviceReady, false);
		//$("#testBlock").bind("taphold", this.recordBtnHoldkHandler);
		$('#audioButton').bind("click", this.captureAudio);
		$('#testBlock').mousedown(function() {
			$("#test").text("button is being held");
			var releaseButton = function() {
				$("#test").text("button clicked or released");
				return;
			}
			timeoutId = setTimeout(releaseButton, 3000);
		}).bind('mouseup mouseleave', function() {
			$("#test").text("button clicked or released");
		});
	},
	recordBtnHoldkHandler : function() {
		$("#test").text("button is being held");
	},
	recordBtnClickHandler : function() {
		$("#test").text("button clicked or released");
	},
	onDeviceReady : function() {
		// app.receivedEvent('deviceready');
	},
	// Update DOM on a Received Event
	receivedEvent : function(id) {
	},
	captureAudio: function() {
		alert("going into catpure audio");
    	// Limit the number of recorded audio
		navigator.device.capture.captureAudio(this.captureSuccess, this.captureError);
    },
    captureSuccess: function(mediaFiles) {
    	var i, len;
    	for (i = 0, len=mediaFiles.length ; i < len; i++) {
    		navigator.notification.alert (mediaFiles[i].fullPath + " " + mediaFiles[i].name);
    	}
    },
    	// CaptureAudio method is executed after a failed callback
    captureError: function(error) {
    	var msg = 'capture error occurred:' + error.code; 
    	navigator.notification.alert(msg, null, 'Uh oh!');
    }
};
