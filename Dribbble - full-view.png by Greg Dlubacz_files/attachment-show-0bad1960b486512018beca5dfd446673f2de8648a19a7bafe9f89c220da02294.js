var Dribbble;(Dribbble=Dribbble||{}).String={capitalize:function(e){return e.charAt(0).toUpperCase()+e.slice(1)}},(Dribbble=Dribbble||{}).AdNetworks=Dribbble.AdNetworks||{},Dribbble.AdNetworks.Carbon={enabled:!1,scriptLoaded:!1,zones:{footer:"CVAIKKJM",shot:"CVAIP5QU"},enable:function(){this.enabled=!0},ready:function(){return this.enabled&&"undefined"!=typeof _carbonads},load:function(e){var t=this.zones[e];if(this.enabled&&t){var n=$(".carbon.notloaded");if(this.scriptLoaded&&this.ready())0<n.length&&_carbonads.reload(n[0],t);else{var i=document.createElement("script");i.type="text/javascript",i.src="//cdn.carbonads.com/carbon.js?serve="+t+"&placement=dribbble",i.id="_carbonads_js",i.async=!0,i.onload=function(){this.scriptLoaded=!0}.bind(this),n[0].appendChild(i)}n.removeClass("notloaded").data("carbon-context",e)}},shuffle:function(){this.ready()&&_carbonads.refresh()}},Dribbble.Ads=Dribbble.AdNetworks.Carbon,Dribbble.pathName=function(e){var t=document.createElement("a");t.href=e;var n=t.pathname;return"/"!=n.charAt(0)?"/"+n:n},Dribbble.Analytics={existingProperties:[],sentEvents:[],reset:function(){this.existingProperties=[],this.sentEvents=[],this.namedRoot=null},logDribbbleGAPageView:function(e){window.ga&&("/"==(e=Dribbble.pathName(e))&&(e=Dribbble.Analytics.namedRoot||e),ga("send","pageview",e))},logPageView:function(e,t,n,i){this.log(e,t,"pageview",{page:n,title:i})},log:function(e,t,n,i,r){"undefined"==typeof ga?(r=2*(r||50))<1e4&&setTimeout(function(){this.log(e,t,n,i,r)}.bind(this),r):(this._createProperty(e,t),this._sendEvent(t,n,i))},_createProperty:function(e,t){-1==this.existingProperties.indexOf(e)&&(ga("create",e,"auto",{name:t}),this.existingProperties.push(e))},_sendEvent:function(e,t,n){n=n||{};var i=[e,t,$.param(n)].join("|");-1==this.sentEvents.indexOf(i)&&(ga(e+".send",t,n),this.sentEvents.push(i))}},Dribbble.Url={addParams:function(e,t){var n=e+this.urlJoinCharacter(e),i=[];return($.isArray(t)?t:Object.keys(t).map(function(e){return[e,t[e]]})).forEach(function(e){i.push(e[0]+"="+encodeURIComponent(e[1]))}),n+i.join("&")},parse:function(e){var t=document.createElement("a");return t.href=e,t},urlJoinCharacter:function(e){return-1==e.indexOf("?")?"?":"&"},extractParams:function(e){return e.split("?")[1]}},Dribbble.Segment={queue:[],events:{ab_tested:"Ab Tested",api_request_processed:"Api Request Processed",header_nav_clicked:"Header Nav Clicked",checkout_viewed:"Checkout Viewed",form_filled:"Form Filled",job_archived:"Job Archived",job_swapped:"Job Swapped",modal_closed:"Modal Closed",modal_opened:"Modal Opened",onboarding_finished:"Onboarding Finished",onboarding_followings_suggested:"Onboarding Followings Suggested",onboarding_hirer_upsold:"Onboarding Hirer Upsold",onboarding_profile_submitted:"Onboarding Profile Submitted",onboarding_entered:"Onboarding Entered",order_canceled:"Order Canceled",order_purchased:"Order Purchased",order_refunded:"Order Refunded",page_shared:"Page Shared",polyfill_triggered:"Polyfill Triggered",push_notification_delivered:"Push Notification Delivered",push_notification_deregistered:"Push Notification Deregistered",push_notification_failed:"Push Notification Failed",push_notification_registered:"Push Notification Registered",sendgrid_tracked:"Sendgrid Tracked",shot_bucketed:"Shot Bucketed",shot_commented:"Shot Commented",shot_liked:"Shot Liked",shot_projected:"Shot Projected",shot_published:"Shot Published",shot_unbucketed:"Shot Unbucketed",shot_unliked:"Shot Unliked",shot_unprojected:"Shot Unprojected",shot_viewed:"Shot Viewed",signed_up:"Signed Up",subscription_canceled:"Subscription Canceled",subscription_created:"Subscription Created",subscription_downgraded:"Subscription Downgraded",subscription_reactivated:"Subscription Reactivated",subscription_upgraded:"Subscription Upgraded",team_owner_added:"Team Owner Added",team_owner_left:"Team Owner Left",user_followed:"User Followed",user_type_changed:"User Type Changed",user_unfollowed:"User Unfollowed",user_joined_team:"User Joined Team",user_left_team:"User Left Team",work_education_recorded:"Work Education Recorded",work_experience_recorded:"Work Experience Recorded",work_location_recorded:"Work Location Recorded",work_settings_recorded:"Work Settings Recorded"},identify:function(e,t){this.analytics().identify(e,t)},page:function(e){if((e=e||{}).url){var t=Dribbble.Url.parse(e.url),n=""+t.pathname+t.search+t.hash;e.url=t.href,e.path=n}e.controller=e.controller||$("meta[name=segment-controller]").attr("content"),e.action=e.action||$("meta[name=segment-action]").attr("content"),this.analytics().page(e)},track:function(e,t){var n=this.events[e];t=t||{},n!=undefined&&this.analytics().track(n,t)},analytics:function(){return window.analytics||this._shim},processPending:function(){if(window.analytics)for(;0<this.queue.length;){var e=this.queue.shift(),t=e[0],n=e[1];window.analytics[t].apply(window.analytics,n)}},_shim:{identify:function(){Dribbble.Segment.queue.push(["identify",arguments])},page:function(){Dribbble.Segment.queue.push(["page",arguments])},track:function(){Dribbble.Segment.queue.push(["track",arguments])}}};