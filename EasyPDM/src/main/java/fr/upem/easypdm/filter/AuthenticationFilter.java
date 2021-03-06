/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package fr.upem.easypdm.filter;

import fr.upem.controllers.AuthController;
import java.io.IOException;
import java.io.PrintStream;
import java.io.PrintWriter;
import java.io.StringWriter;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Denis
 */
public class AuthenticationFilter implements Filter {
    private final static String AUTH_KEY = "userSession";
    
    private FilterConfig filterConfig = null;
    
    public AuthenticationFilter() {
    }    

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        this.filterConfig = filterConfig;
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        
        HttpServletRequest httpRequest = (HttpServletRequest) request;
        HttpServletResponse httpResponse = (HttpServletResponse) response;
        if(httpRequest.getSession().getAttribute(AUTH_KEY) == null) {
            httpResponse.sendRedirect("/EasyPDM/connection.xhtml");
            
        }
        else {
            chain.doFilter(request, response);
        }
    
    }

    @Override
    public void destroy() {
        this.filterConfig = null;
    }
    

}
