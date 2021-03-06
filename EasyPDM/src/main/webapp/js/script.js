/**
 *	Code qui s'éxécute une fois que tous les élément de la page est chargée
 */

$(window).load(function() {
	var windowHeight = $(window).height();
	$("#page").css("height", windowHeight);
	
	var connectionHeight = $("#connection").height();
	$("#connection").css("margin-top", -connectionHeight / 2);
	
	var headerHeight = $("header").height();
	var navigationHeight = $("nav").height();
	var footerHeight = $("footer").height();
	$("#content").css("height", windowHeight - headerHeight - navigationHeight - footerHeight);

	var titleHeight = $("#title").height();
	$("#split").css("height", windowHeight - headerHeight - navigationHeight - titleHeight - footerHeight - 2);	
});

/**
 *	Code qui s'éxécute lorsque la page est redimensionnée
 */
 
$(window).resize(function() {
	var windowHeight = $(window).height();
	$("#page").css("height", windowHeight);
	
	var connectionHeight = $("#connection").height();
	$("#connection").css("margin-top", -connectionHeight / 2);
	
	var headerHeight = $("header").height();
	var navigationHeight = $("nav").height();
	var footerHeight = $("footer").height();
	$("#content").css("height", windowHeight - headerHeight - navigationHeight - footerHeight);
	
	var titleHeight = $("#title").height();
	$("#split").css("height", windowHeight - headerHeight - navigationHeight - titleHeight - footerHeight - 2);	
});

/**
 *	Code qui s'éxécute une fois la page HTML est chargée
 */
 
$(document).ready(function() {
    $('.treeview').treeView();
    $('.treeview').treeView('collapseAll'); //expandAll or collapseAll

    $(".treeview .menu1").contextMenu({
        menu: 'menu1'
    },
    function(action, el, pos) {
        switch (action) {
            case "upload":
                var chapter_id = el[0].id;

                $("#upload_new_paragraph_" + chapter_id).dialog({
                    resizable: false,
                    height: 150,
                    width: 300,
                    modal: true
                });
                
                break;
            default:
                break;
        }
    });
    
    $(".treeview .menu2").contextMenu({
        menu: 'menu2'
    },
    function(action, el, pos) {
        switch (action) {
            case "download":
                var e_id = el[0].id;
                
                $.fileDownload('/EasyPDM/download?e_id=' + e_id);
                
                break;
            case "upload":
                var paragraph_id = el[0].id;
                
                $("#edit_new_paragraph_" + paragraph_id).dialog({
                    resizable: false,
                    height: 150,
                    width: 300,
                    modal: true
                });

            break;
            default:
                break;
        }
    });
    
    $(".treeview .menu3").contextMenu({
        menu: 'menu3'
    },
    function(action, el, pos) {
        switch (action) {
            case "addchapter":
                var chapter_id = el[0].id;
                
                $("#add_new_chapter_" + chapter_id).dialog({
                    title: "Add new Chapter",
                    resizable: false,
                    height: 100,
                    width: 200,
                    modal: true
                });
                
                break;
            default:
                break;
        }
    });
    
    $(".treeview .menu4").contextMenu({
        menu: 'menu4'
    },
    function(action, el, pos) {
        switch (action) {
            case "addtome":
                var tome_id = el[0].id;
                
                $("#add_new_tome_" + tome_id).dialog({
                    title: "Add new Tome",
                    resizable: false,
                    height: 100,
                    width: 200,
                    modal: true
                });
                
                break;
            default:
                break;
        }
    });
    $("#add_enterprise_btn").on("click", function() {
        $("#add_new_enterprise").dialog({
            title: "Add new enterprise",
            resizable: false,
            height: 180,
            width: 300,
            modal: true
        });
    });

    $("#add_department_btn").on("click", function() {
        $("#add_new_department").dialog({
            title: "Add new department",
            resizable: false,
            height: 200,
            width: 300,
            modal: true
        });
    });
    
    $("#add_service_btn").on("click", function() {
        $("#add_new_service").dialog({
            title: "Add new service",
            resizable: false,
            height: 200,
            width: 300,
            modal: true
        });
    });
    
    $("#add_team_btn").on("click", function() {
        $("#add_new_team").dialog({
            title: "Add new team",
            resizable: false,
            height: 200,
            width: 300,
            modal: true
        });
    });
    
    $("#add_user_btn").on("click", function() {
        $("#add_new_user").dialog({
            title: "Add new user",
            resizable: false,
            height: 260,
            width: 200,
            modal: true
        });
    });
    
    $("#add_role_user_btn").on("click", function() {
        $("#add_role_user").dialog({
            title: "Link role and organisation to user",
            resizable: false,
            height: 200,
            width: 300,
            modal: true
        });
    });
});