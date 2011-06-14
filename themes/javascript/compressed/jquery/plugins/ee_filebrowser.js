/*!
 * ExpressionEngine - by EllisLab
 *
 * @package		ExpressionEngine
 * @author		ExpressionEngine Dev Team
 * @copyright	Copyright (c) 2003 - 2011, EllisLab, Inc.
 * @license		http://expressionengine.com/user_guide/license.html
 * @link		http://expressionengine.com
 * @since		Version 2.0
 * @filesource
 */

(function(a){function i(b,c){isNaN(c)&&(c=0);if(isNaN(b))k[b.id]=b;else if(typeof k[b]=="undefined")return a.ee_filebrowser.endpoint_request("directory_contents",{directory:b},function(a){k[b]=a;i(b,c)});else b=k[b];if(!(!b in l)){l[b.id]=b.files;a.each(b.files,function(a,c){c.img_id=a+"";c.directory=b.id+"";c.is_image=!(c.mime_type.indexOf("image")<0)});var d=a("#tableView").detach(),e=a("#viewSelectors").detach();d.find("tbody").empty();a("#file_chooser_body").empty().append(d);a("#file_chooser_footer").empty().append(e);
d=m=="list"?p:q;e={};c*=d;var j,h;m!="list"?(j=r(b),h=b.images.slice(c,c+d),a("#tableView").hide(),a.tmpl("thumb",h).appendTo("#file_chooser_body"),a("a.file_chooser_thumbnail:nth-child(9n+2)").addClass("first"),a("a.file_chooser_thumbnail:nth-child(9n+1)").addClass("last"),a("a.file_chooser_thumbnail:gt(26)").addClass("last_row"),e.pages_total=j.length):(g[n].content_type=="image"?(j=r(b),h=b.images.slice(c,c+d),e.pages_total=j.length):h=b.files.slice(c,c+d),a("#tableView").show(),a.tmpl("fileRow",
h).appendTo("#tableView tbody"));w(b,c,d,e)}}function w(b,c,d,e){for(var j=e.pages_total?e.pages_total:b.files.length,h=[],f=0,g=Math.ceil(j/d);f<g;f++)h[f]=f+1;for(var g=a("<select />",{id:"current_page",name:"current_page"}),f=0,k=h.length;f<k;f++)g.append(a("<option />",{value:f,text:"Page "+(f+1)}));a.extend(e,{directory:b.id,pages_total:j,pages_from:c+1,pages_to:c+d>j?j:c+d,pages_current:Math.floor(c/d)+1,pages:h,dropdown:g.wrap("<div />").parent().html(),pagination_needed:h.length>1?!0:!1});
a.tmpl("pagination",e).appendTo("#file_chooser_footer").find("#view_type").val(m).change(function(){a("#file_chooser_body").removeClass("list thumb").addClass(this.value);m=this.value;i(a("#dir_choice").val())}).end().find("select[name=category]").replaceWith(b.categories).end().find("select[name=current_page]").val(e.pages_current-1).change(function(){i(a("#dir_choice").val(),a(this).val());o(e.pages.length)}).end().find("a.previous").click(function(a){a.preventDefault();s(-1);o(e.pages.length)}).end().find("a.next").click(function(a){a.preventDefault();
s(1);o(e.pages.length)}).end()}function s(b){typeof b=="undefined"&&(b=0);var c=a("#current_page").val(),b=parseInt(c,10)+b;a("#current_page").val(b);i(a("#dir_choice").val(),b)}function o(b){a("#file_chooser_footer #paginationLinks a").removeClass("visualEscapism");a("#current_page").val()==0?a("#file_chooser_footer #paginationLinks .previous").addClass("visualEscapism"):a("#current_page").val()==b-1&&a("#file_chooser_footer #paginationLinks .next").addClass("visualEscapism")}function r(a){if(typeof a.images==
"undefined"){for(var c=[],d=0,e=a.files.length;d<e;d++)a.files[d].is_image&&c.push(a.files[d]);a.images=c;k[a.id].images=c}return a.images}function t(b){l[b]==""&&a.ee_filebrowser.endpoint_request("directory_contents",{directory:b},i)}function x(){f.dialog({width:968,height:615,resizable:!1,position:["center","center"],modal:!0,draggable:!0,title:EE.filebrowser.window_title,autoOpen:!1,zIndex:99999,open:function(){var b=a("#dir_choice").val();t(b)}});m="list";a("#dir_choice").change(function(){t(this.value);
i(this.value,0)});a.template("fileRow",a("<tbody />").append(a("#rowTmpl").remove().attr("id","")));a.template("noFilesRow",a("#noFilesRowTmpl").remove());a.template("pagination",a("#paginationTmpl").remove());a.template("thumb",a("#thumbTmpl").remove());a("#upload_form",f).submit(a.ee_filebrowser.upload_start);a("#file_chooser_body",f).addClass(m)}var u=0,l,f,p,q,v,k={},g={},n="",m;a.ee_filebrowser=function(){p=15;q=36;a.ee_filebrowser.endpoint_request("setup",function(b){l={};f=a(b.manager).appendTo(document.body);
for(var c in b.directories)u||(u=c),l[c]="";x();typeof a.ee_fileuploader!="undefined"&&a.ee_fileuploader({type:"filebrowser",open:function(){a.ee_fileuploader.set_directory_id(a("#dir_choice").val())},close:function(){a("#file_uploader").removeClass("upload_step_2").addClass("upload_step_1");a("#fileChooser").size()&&a.ee_filebrowser.reload_directory(a("#dir_choice").val())},trigger:"#fileChooser #upload_form input"})})};a.ee_filebrowser.endpoint_request=function(b,c,d){!d&&a.isFunction(c)&&(d=c,
c={});c=a.extend(c,{action:b});a.getJSON(EE.BASE+"&"+EE.filebrowser.endpoint_url+"&"+a.param(c),d)};a.ee_filebrowser.reload_directory=function(b){a.ee_filebrowser.endpoint_request("directory_contents",{directory:b},function(c){k[b]=c;a("#dir_choice").val()==b&&i(b)})};a.ee_filebrowser.add_trigger=function(b,c,d,e){e?g[c]=d:a.isFunction(c)?(e=c,c="userfile",g[c]={content_type:"any",directory:"all"}):a.isFunction(d)&&(e=d,g[c]={content_type:"any",directory:"all"});a(b).click(function(){var b=this;n=
c;g[n].directory!="all"?(a("#dir_choice",f).val(g[n].directory),a("#dir_choice_form",f).hide()):(a("#dir_choice",f).val(),a("#dir_choice_form",f).show());i(a("#dir_choice").val());f.dialog("open");v=function(a){e.call(b,a,c)};return!1})};a.ee_filebrowser.get_current_settings=function(){return g[n]};a.ee_filebrowser.placeImage=function(b,c){a.ee_filebrowser.clean_up(l[b][c],"");return!1};a.ee_filebrowser.clean_up=function(b,c){a("#page_0 .items").html(c);f.dialog("close");v(b)};a.ee_filebrowser.setPage=
i})(jQuery);
